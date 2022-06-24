import { XMLParser } from 'fast-xml-parser'
import { fetch, ResponseType, getClient, Body } from '@tauri-apps/api/http'
import { Feed } from '../types'

let fetching = false

export async function transcript(url: string) {
  const client = await getClient()
  return client.post(
    `https://aleph.chezhe.dev/api/transcript`,
    Body.json({
      audio_url: url,
      language_code: 'en',
    })
  )
}

export function fetchFeeds(feeds: Feed[]) {
  if (!fetching) {
    fetching = true
  } else {
    return Promise.resolve([])
  }
  return Promise.all(feeds.map(fetchFeed))
}

export async function fetchFeed(feed: Feed): Promise<Feed[]> {
  return fetch(`${feed.url}`, {
    method: 'GET',
    responseType: ResponseType.Text,
  })
    .then((response) => response.data)
    .then((data) => {
      const parser = new XMLParser({
        ignoreAttributes: false,
      })
      const jObj = parser.parse(data as string)
      const extra = {
        image: jObj.rss?.channel?.image,
      }

      let items = []
      if (Array.isArray(jObj?.feed?.entry)) {
        items = jObj?.feed?.entry
      } else if (Array.isArray(jObj.rss?.channel?.item)) {
        items = jObj.rss?.channel?.item
      }
      console.log('fetchFeed', items)

      return items.map((item: any) => formatEpisode(item, feed, extra))
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

export function formatEpisode(
  item: any,
  feed: Feed,
  extra: {
    image: any
  }
) {
  let newItem = item
  if (item.enclosure) {
    newItem = {
      ...newItem,
      enclosure: {
        url: newItem.enclosure['@_url'],
        type: newItem.enclosure['@_type'],
        length: newItem.enclosure['@_length'],
      },
    }
  }
  if (!newItem.image) {
    newItem = {
      ...newItem,
      image: newItem['itunes:image'] || extra.image,
    }
  }
  let guid = ''
  if (newItem.guid) {
    guid =
      typeof newItem.guid === 'string' ? newItem.guid : newItem.guid['#text']
  }

  let podurl = ''
  if (
    newItem.enclosure &&
    newItem.enclosure.type &&
    newItem.enclosure.type.startsWith('audio/')
  ) {
    podurl = newItem.enclosure.url || ''
  }

  let cover = newItem.cover
  if (!cover && newItem.image) {
    cover = newItem.image.url || newItem.image['@_href'] || ''
  }

  let link = ''
  if (typeof newItem.link === 'string') {
    link = `${newItem.link}?${guid}`
  } else {
    link = newItem.id || newItem.link['@_href']
  }

  let author = ''
  if (newItem.author) {
    author = newItem.author.name ?? (newItem.author || newItem['itunes:author'])
  }

  let description = newItem['content:encoded'] || newItem.description || ''
  if (newItem.content) {
    description = newItem.content['#text']
  }

  newItem = {
    link,
    author,
    pubDate: newItem.pubDate || newItem.published || '',
    cover,
    podurl,
    title: newItem.title || '',
    description,
    guid: guid || '',
    feedid: feed.id,
    readed: false,
    starred: false,
  }
  return newItem
}
