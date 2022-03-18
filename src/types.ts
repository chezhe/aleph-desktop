export enum SourceType {
  RSS = 'rss',
  PODCAST = 'podcast',
}

export interface Source {
  name: string
  url: string
  type: SourceType
}

export interface Digest {
  author: string
  description: string
  link: string
  pubDate: string
  title: string
  guid?: string
  'content:encoded'?: string
  read?: boolean
  starred?: boolean
  source?: string
}

export interface Channel {
  description: string
  language: string
  link: string
  managingEditor: string
  pubDate: Date
  title: string
  item: Digest[]
}
