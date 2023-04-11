import { ImageSourcePropType } from 'react-native'

export enum FeedType {
  RSS = 'RSS',
  Podcast = 'Podcast',
}

export interface Feed {
  url: string
  title: string
  description: string
  language: string
  favicon: string
  deleted?: boolean
  type?: FeedType
}

export interface FeedEntry {
  id: string
  link: string
  title: string
  description: string
  published: Date
  feedUrl: string
  read?: boolean
  bookmarked?: boolean
  tags: string[]
  entryType: FeedType
  media?: string
  cover?: string
}

export interface PlayingFeedEntry extends FeedEntry {
  position?: number
  duration?: number
}

export interface FeedData {
  feed: Feed
  entries: FeedEntry[]
}

export interface Tag {
  title: string
  icon: any
  count: number
}

export interface CustomTag {
  title: string
  createdAt: Date
}

export type FeedListType =
  | 'flow'
  | 'bookmarks'
  | 'tags'
  | 'feeds'
  | 'feed'
  | 'playlist'
  | 'podcast'

export enum FeedPublishLimit {
  Week = 'week',
  Month = 'month',
  Year = 'year',
  Ever = 'ever',
}

export enum PubEvent {
  FEEDS_UPDATE = 'FEEDS_UPDATE',
  ENTRYFLOW_UPDATE = 'ENTRYFLOW_UPDATE',
  BOOKMARKS_UPDATE = 'BOOKMARKS_UPDATE',
  TAGS_UPDATE = 'TAGS_UPDATE',
  ENTRIES_UPDATE = 'ENTRIES_UPDATE',
  ON_PODCAST_PORTAL = 'ON_PODCAST_PORTAL',
  TOAST_MESSAGE = 'TOAST_MESSAGE',
  TOAST_HIDE = 'TOAST_HIDE',
  TRACK_QUEUE_UPDATE = 'TRACK_QUEUE_UPDATE',
}

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastPayload {
  type: ToastType
  message: string
  icon?: ImageSourcePropType
  duration: number
}
