import { useMemo } from 'react'
import useFeeds from './useFeeds'

export default function useFeed(url?: string) {
  const { feeds } = useFeeds()

  return useMemo(() => {
    return feeds.find((feed) => feed.url === url)
  }, [feeds, url])
}
