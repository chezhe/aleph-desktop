import { Digest } from '../types'

export const isPodcast = (item: Digest) => item.enclosure

export const isContained = (item: Digest, starreds: Digest[]) => {
  if (isPodcast(item)) {
    return !!starreds.find((t) => t.guid === item.guid)
  }
  return !!starreds.find((t) => t.link === item.link)
}

export const excludeItem = (item: Digest, arr: Digest[]) => {
  if (isPodcast(item)) {
    return arr.filter((t) => t.guid !== item.guid)
  }
  return arr.filter((t) => t.link !== item.link)
}
