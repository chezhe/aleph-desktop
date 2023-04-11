import SideBar from '@/components/SideBar'
import { XStack } from 'tamagui'
import Content from '@/components/Content'
import { useEffect, useState } from 'react'
import useFeeds from '@/hooks/useFeeds'
import useEntryFlow from '@/hooks/useEntryFlow'
import useBookmarks from '@/hooks/useBookmarks'
import { useAppDispatch } from '@/store/hooks'
import { fetcher } from '@/lib/request'
import { HOST } from '@/lib/constants'
import { initSQLite } from '@/lib/db'

export default function Home() {
  const [initing, setIniting] = useState(false)
  useFeeds()
  useEntryFlow()
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

  return (
    <>
      <main style={{ height: '100vh', display: 'flex' }}>
        <XStack f={1}>
          <SideBar />
          <Content />
        </XStack>
      </main>
    </>
  )
}
