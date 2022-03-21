export enum Category {
  FOLDER = 'folder',
  FEED = 'feed',
}

export enum SourceType {
  RSS = 'rss',
  PODCAST = 'podcast',
}

export interface Source {
  id?: string
  name: string
  url: string
  type: SourceType
}

export interface Episode {
  link: string
  author: string
  pubDate: string
  title: string
  description: string
  podurl: string
  guid: string
  readed: boolean
  starred: boolean
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
