import { XMLParser } from 'fast-xml-parser'
import { fetch, ResponseType } from '@tauri-apps/api/http'
import { Feed } from '../types'

let fetching = false

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
      return (
        jObj.rss?.channel?.item.map((item: any) =>
          formatEpisode(item, feed, extra)
        ) || []
      )
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

  const link = `${newItem.link}?${guid}`

  newItem = {
    link,
    author: newItem.author || newItem['itunes:author'] || '',
    pubDate: newItem.pubDate || '',
    cover,
    podurl,
    title: newItem.title || '',
    description: newItem['content:encoded'] || newItem.description || '',
    guid: guid || '',
    feedid: feed.id,
    readed: false,
    starred: false,
  }
  return newItem
}
