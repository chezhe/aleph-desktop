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

export function fetchFeed(source: Source): Promise<Source[]> {
  return fetch(`${source.url}`)
    .then((response) => response.text())
    .then((data) => {
      const parser = new XMLParser()
      const jObj = parser.parse(data)
      return jObj.rss?.channel.item
    })
    .catch(() => [])
}
