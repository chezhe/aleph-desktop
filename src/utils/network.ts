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
      return jObj.rss?.channel.item.map(formatItem)
      // .sort(
      //   (a: Episode, b: Episode) =>
      //     dayjs(a.pubDate).unix() - dayjs(b.pubDate).unix()
      // )
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

export function formatItem(item: any) {
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
  return newItem
}
