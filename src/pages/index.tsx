import SideBar from '@/components/SideBar'
import { XStack } from 'tamagui'
import {
  Toast,
  ToastProvider,
  useToastController,
  useToastState,
} from '@tamagui/toast'
import Content from '@/components/Content'
import { useEffect, useState } from 'react'
import useFeeds from '@/hooks/useFeeds'
import useEntryFlow from '@/hooks/useEntryFlow'
import useBookmarks from '@/hooks/useBookmarks'
import { useAppDispatch } from '@/store/hooks'
import { fetcher } from '@/lib/request'
import { HOST } from '@/lib/constants'
import { initSQLite } from '@/lib/db'
import { fetchFeedFlow, tagFeedEntries } from '@/lib/task'

const CurrentToast = () => {
  const toast = useToastState()

  // only show the component if it's present and not handled by native toast
  if (!toast || toast.isHandledNatively) {
    return null
  }

  return (
    <Toast key={toast.id}>
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  )
}

export default function Home() {
  const [initing, setIniting] = useState(false)
  const { feeds } = useFeeds()
  const { entries } = useEntryFlow()
  useBookmarks()

  const dispatch = useAppDispatch()
  useEffect(() => {
    // fetch explore
    fetcher(`${HOST}/explore`).then((res) => {
      dispatch({
        type: 'feed/setExplore',
        payload: res,
      })
    })

    // init db
    setTimeout(() => {
      initSQLite()
    }, 300)
    setIniting(true)
    setTimeout(() => {
      setIniting(false)
    }, 3000)
  }, [])

  useEffect(() => {
    fetchFeedFlow(feeds.filter((t) => !t.deleted))
  }, [feeds.filter((t) => !t.deleted).length])

  useEffect(() => {
    tagFeedEntries(entries)
  }, [entries.length])

  return (
    <ToastProvider native={['web']}>
      <main style={{ height: '100vh', display: 'flex' }}>
        <CurrentToast />
        <XStack f={1}>
          <SideBar />
          <Content />
        </XStack>
      </main>
    </ToastProvider>
  )
}
