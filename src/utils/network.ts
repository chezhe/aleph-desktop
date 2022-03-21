import { XMLParser } from 'fast-xml-parser'
import { fetch, ResponseType } from '@tauri-apps/api/http'
import { Source } from '../types'

let fetching = false

export function fetchSources(sources: Source[]) {
  if (!fetching) {
    fetching = true
  } else {
    return Promise.resolve([])
  }
  return Promise.all(sources.map(fetchFeed))
}

export async function fetchFeed(source: Source): Promise<Source[]> {
  return fetch(`${source.url}`, {
    method: 'GET',
    responseType: ResponseType.Text,
  })
    .then((response) => response.data)
    .then((data) => {
      const parser = new XMLParser({
        ignoreAttributes: false,
      })
      const jObj = parser.parse(data as string)
      console.log(source, jObj)
      return (
        jObj.rss?.channel?.item.map((item: any) =>
          formatEpisode(item, source)
        ) || []
      )
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

export function formatEpisode(item: any, source: Source) {
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
  if (newItem['itunes:image']) {
    newItem = {
      ...newItem,
      cover: newItem['itunes:image']['@_href'],
    }
  }
  newItem = {
    link: newItem.link,
    author: newItem.author || newItem['itunes:author'] || '',
    pubDate: newItem.pubDate || '',
    cover: newItem.cover || '',
    podurl: newItem.enclosure?.url || '',
    title: newItem.title || '',
    description: newItem.description || newItem['content:encoded'] || '',
    guid: newItem.guid || '',
    feedid: source.id,
    readed: false,
    starred: false,
  }
  return newItem
}
