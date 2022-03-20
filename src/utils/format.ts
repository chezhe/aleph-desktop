import parse from 'url-parse'
import { Episode } from '../types'

export const isPodcast = (item: Episode) => item.enclosure

export const isContained = (item: Episode, starreds: Episode[]) => {
  if (isPodcast(item)) {
    return !!starreds.find((t) => t.guid === item.guid)
  }
  return !!starreds.find((t) => t.link === item.link)
}

export const getEpisodeId = (item: Episode) => item.guid || item.link

export const excludeItem = (item: Episode, arr: Episode[]) => {
  if (isPodcast(item)) {
    return arr.filter((t) => t.guid !== item.guid)
  }
  return arr.filter((t) => t.link !== item.link)
}

export const stripURL = (url: string) => {
  if (url.includes('jt.ximalaya.com')) {
    const parsed = parse(url, true)
    if (parsed.query && parsed.query.jt) {
      return parsed.query.jt
    }
  }
  return url
}

// export const diffConcat = (a: Episode[], b: Episode[]) => {

// }
