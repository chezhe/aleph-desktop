export enum Category {
  FOLDER = 'folder',
  FEED = 'feed',
}

export enum FeedType {
  RSS = 'rss',
  PODCAST = 'podcast',
}

export interface Feed {
  id?: string
  name: string
  url: string
  type: FeedType
}

export interface Episode {
  link: string
  author: string
  pubDate: string
  title: string
  description: string
  podurl: string
  guid: string
  readed: boolean | string
  starred: boolean | string
  feedid: string
  cover: string
}

export interface Channel {
  description: string
  language: string
  link: string
  managingEditor: string
  pubDate: Date
  title: string
  item: Episode[]
}

export interface TranscriptWord {
  text: string
  start: number
  end: number
}
