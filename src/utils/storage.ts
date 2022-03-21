import Database from 'tauri-plugin-sql-api'
import { v4 } from 'uuid'
// import type { QueryResult } from 'tauri-plugin-sql-api'
import { Episode, Source } from '../types'

let db: null | Database = null

export async function connect(): Promise<Database> {
  if (db) {
    return db
  }
  db = await Database.load('sqlite:profile.db')
  return db
}

export async function allFeeds(): Promise<Source[]> {
  const db = await connect()
  return await db.select('SELECT * FROM feeds')
}

export async function allEpisodes(): Promise<Episode[]> {
  const db = await connect()
  return await db.select('SELECT * FROM episodes')
}

export async function createFeed(feed: Source): Promise<Source> {
  const newFeed = {
    ...feed,
    id: v4(),
  }
  if (db) {
    await db.execute(
      'INSERT INTO feeds (id, name, url, type) VALUES ($1,$2,$3,$4)',
      [newFeed.id, newFeed.name, newFeed.url, newFeed.type]
    )
  } else {
    console.warn(
      `There is not a valid DB connection, adding Feed to local storage only`
    )
  }
  return newFeed
}

export async function createEpisode(episode: Episode): Promise<Episode> {
  if (db) {
    await db.execute(
      'INSERT INTO episodes (link, author, pubDate, cover, podurl, guid, title, feedid, description, readed, starred) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [
        episode.link,
        episode.author,
        episode.pubDate,
        episode.cover,
        episode.podurl,
        episode.guid,
        episode.title,
        episode.feedid,
        episode.description,
        episode.readed,
        episode.starred,
      ]
    )
  } else {
    console.warn(
      `There is not a valid DB connection, adding Episode to local storage only`
    )
  }
  return episode
}

export async function updateFeed(feed: Source): Promise<Source> {
  await db?.execute(
    'UPDATE feeds SET url = $1, type = $2, name = $3 WHERE id = $4',
    [feed.url, feed.type, feed.name, feed.id]
  )
  return feed
}

export async function readEpisode(episode: Episode): Promise<Episode> {
  try {
    await db?.execute('UPDATE episodes SET readed = $1 WHERE link = $2', [
      true,
      episode.link,
    ])
  } catch (error) {
    console.warn(`Fail to readEpisode`)
  }
  return episode
}

export async function readEpisodeByFeedId(feed: Source) {
  try {
    await db?.execute('UPDATE episodes SET readed = $1 WHERE feedid = $2', [
      true,
      feed.id,
    ])
  } catch (error) {
    console.warn(`Fail to readEpisodeByFeedId`)
  }
}

export async function starEpisode(
  episode: Episode,
  starred: boolean
): Promise<Episode> {
  try {
    await db?.execute('UPDATE episodes SET starred = $1 WHERE link = $2', [
      starred,
      episode.link,
    ])
  } catch (error) {
    console.warn(`Fail to starEpisode`)
  }
  return episode
}
export async function removeFeed(feed: Source) {
  try {
    await db?.execute('DELETE FROM feeds WHERE id = $1', [feed.id])
    await db?.execute('DELETE FROM episodes WHERE feedid = $1', [feed.id])
  } catch (error) {}
}
