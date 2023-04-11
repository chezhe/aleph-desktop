import Database from 'tauri-plugin-sql-api'
import { Feed, FeedEntry, FeedType, PubEvent } from '../types'
import dayjs from 'dayjs'

interface SQLiteUpdateOption {
  isUpdate?: boolean
}

async function openDatabase(): Promise<Database> {
  const db = await Database.load('sqlite:test.db')
  return db
}

function onError(error: any) {
  console.log('Error: ', error)
}

export async function initSQLite() {
  const db = await openDatabase()
  await db.execute(
    'CREATE TABLE IF NOT EXISTS feeds (url TEXT PRIMARY KEY NOT NULL, title TEXT, description TEXT, favicon TEXT, language TEXT, deleted INTEGER, type INTEGER);'
  )
  await db.execute(
    `CREATE TABLE IF NOT EXISTS entries (
        id TEXT PRIMARY KEY NOT NULL,
        link TEXT,
        title TEXT,
        description TEXT,
        entryType INTEGER,
        media TEXT,
        cover TEXT,
        feedUrl TEXT,
        read INTEGER,
        bookmarked INTEGER,
        tags TEXT,
        published INTEGER
      );`
  )
  onUpdated()
}

export async function purgeAllData() {
  const db = await openDatabase()
  await db.execute('DROP TABLE IF EXISTS feeds;')
  await db.execute('DROP TABLE IF EXISTS entries;')
  PubSub.publish(PubEvent.FEEDS_UPDATE, [])
  PubSub.publish(PubEvent.ENTRYFLOW_UPDATE, [])
  PubSub.publish(PubEvent.BOOKMARKS_UPDATE, [])
}

export async function subFeed(feed: Feed) {
  const db = await openDatabase()
  await db.execute(
    'INSERT INTO feeds (url, title, description, favicon, language, deleted, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      feed.url,
      feed.title,
      feed.description,
      feed.favicon,
      feed.language || '',
      0,
      feed.type === FeedType.Podcast ? 1 : 0,
    ]
  )
  onUpdated()
}

export async function resubFeed(feed: Feed) {
  const db = await openDatabase()
  await db.execute('UPDATE feeds SET deleted = 0 WHERE url = ?', [feed.url])
  onUpdated()
}

export async function unsubFeed(feed: Feed) {
  const db = await openDatabase()
  await db.execute('UPDATE feeds SET deleted = 1 WHERE url = ?', [feed.url])
  await db.execute('DELETE FROM entries WHERE feedUrl = ? AND bookmarked = 0', [
    feed.url,
  ])
  onUpdated()
}

export async function updateFeed(feed: Feed) {
  const db = await openDatabase()
  await db.execute(
    'UPDATE feeds SET title = ?, description = ?, favicon = ? WHERE url = ?',
    [feed.title, feed.description, feed.favicon, feed.url]
  )
}

export async function markAllRead() {
  const db = await openDatabase()
  await db.execute('UPDATE entries SET read = 1', [])
  onUpdated()
}

export async function readEntries(entries: FeedEntry[]) {
  const db = await openDatabase()
  for (const entry of entries) {
    db.execute('UPDATE entries SET read = 1 WHERE id = ?', [entry.id])
  }
}

export async function createEntries(entries: FeedEntry[]) {
  const db = await openDatabase()
  for (const entry of entries) {
    await db.execute(
      'INSERT OR IGNORE INTO entries (id, link, title, description, feedUrl, entryType, media, cover, read, bookmarked, published, tags) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        entry.id,
        entry.link || '',
        entry.title || '',
        entry.description || '',
        entry.feedUrl || '',
        entry.entryType === FeedType.Podcast ? 1 : 0,
        entry.media || '',
        entry.cover || '',
        0,
        0,
        dayjs(entry.published).unix(),
        JSON.stringify(entry.tags),
      ]
    )
  }
  onUpdated()
}

export async function updateEntries(entries: FeedEntry[]) {
  const db = await openDatabase()
  for (const entry of entries) {
    await db.execute(
      'UPDATE entries SET read = ?, bookmarked = ?, tags = ? WHERE id = ?',
      [
        entry.read ? 1 : 0,
        entry.bookmarked ? 1 : 0,
        JSON.stringify(entry.tags),
        entry.id,
      ]
    )
  }
}

function formatEntry(entry: {
  id: string
  title: string
  link: string
  description: string
  feedUrl: string
  read: number
  bookmarked: number
  published: number
  tags: string
  cover: string
  media: string
  entryType: number
}): FeedEntry {
  return {
    ...entry,
    read: entry.read === 1,
    bookmarked: entry.bookmarked === 1,
    published: dayjs.unix(entry.published).toDate(),
    tags: entry.tags ? JSON.parse(entry.tags) : [],
    entryType: entry.entryType === 1 ? FeedType.Podcast : FeedType.RSS,
  }
}

async function onUpdated() {
  const db = await openDatabase()
  const feeds = (await db.select('SELECT * FROM feeds', [])) as any
  PubSub.publish(
    PubEvent.FEEDS_UPDATE,
    feeds.map((t: any) => {
      return {
        ...t,
        deleted: t.deleted === 1,
      }
    })
  )

  const bookmarked = (await db.select(
    'SELECT * FROM entries WHERE bookmarked = 1',
    []
  )) as any
  PubSub.publish(PubEvent.BOOKMARKS_UPDATE, bookmarked.map(formatEntry))

  const entries = (await db.select(
    'SELECT * FROM entries ORDER BY published DESC LIMIT 3000',
    []
  )) as any
  PubSub.publish(PubEvent.ENTRYFLOW_UPDATE, entries.map(formatEntry))
}
