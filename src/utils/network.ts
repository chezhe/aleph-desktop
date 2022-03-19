import { XMLParser } from 'fast-xml-parser'
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
  return fetch(`${source.url}`)
    .then((response) => response.text())
    .then((data) => {
      const parser = new XMLParser({
        ignoreAttributes: false,
      })
      const jObj = parser.parse(data)
      return jObj.rss?.channel.item.map(formatItem)
    })
    .catch(() => [])
}

function formatItem(item: any) {
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
