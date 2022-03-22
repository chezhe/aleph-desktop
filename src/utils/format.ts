import parse from 'url-parse'
import { Episode } from '../types'

export const isPodcastEnclosure = () => {}

export const isPodcast = (item: Episode) => item.podurl

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
  let result = url
  if (url.includes('jt.ximalaya.com')) {
    const parsed = parse(url, true)
    if (parsed.query && parsed.query.jt) {
      result = parsed.query.jt
    }
  }
  if (result.startsWith('http://')) {
    return result.replace('http://', 'https://')
  }
  return result
}

// export const diffConcat = (a: Episode[], b: Episode[]) => {

// }
