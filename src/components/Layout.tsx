import { Box, Grommet, grommet, Main } from 'grommet'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Episode, Feed } from '../types'
import { fetchFeed } from '../utils/network'
import { allEpisodes, allFeeds, connect } from '../utils/storage'
import EpisodeList from './EpisodeList'
import PodPlayer from './PodPlayer'
import Reader from './Reader'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [activeFeed, setActiveFeed] = useState<Feed | undefined>()
  const [activeItem, setActiveItem] = useState<Episode | undefined>()
  const [playingEp, setPlayingEp] = useState<Episode | undefined>()

  const feedList = useAppSelector((state) => state.feed.list)
  const dispatch = useAppDispatch()

  const itemList = useAppSelector((state) => state.episode.list)

  useEffect(() => {
    connect().then(() => {})
    setTimeout(() => {
      // clearStorage()
      allFeeds()
        .then((feeds: Feed[]) => {
          dispatch({
            type: 'feed/init',
            payload: feeds,
          })
          allEpisodes().then((episodes: Episode[]) => {
            dispatch({
              type: 'episode/init',
              payload: episodes,
            })

            feeds.forEach((feed) => {
              fetchFeed(feed).then((episodes) => {
                dispatch({
                  type: 'episode/concat',
                  payload: episodes,
                })
              })
            })
          })
        })
        .catch(console.log)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const episodes = itemList.filter((item: Episode) => {
    if (activeFeed) {
      if (activeFeed.id === 'starred') {
        return item.starred
      }
      return item.feedid === activeFeed.id
    }
    return false
  })

  return (
    <Grommet theme={grommet} themeMode="light" full>
      {/* <TitleBar /> */}
      <Main>
        <Box direction="row" width="100%">
          <Sidebar
            feeds={feedList}
            itemList={itemList}
            activeFeed={activeFeed}
            setActiveFeed={setActiveFeed}
          />
          <EpisodeList
            activeFeed={activeFeed}
            episodes={episodes}
            activeItem={activeItem}
            setActiveItem={(item) => {
              setActiveItem(item)
              dispatch({ type: 'episode/read', payload: item })
            }}
          />
          <Reader
            activeItem={activeItem}
            playingEp={playingEp}
            setPlayingEp={setPlayingEp}
          />

          <PodPlayer
            playingEp={playingEp}
            setPlayingEp={setPlayingEp}
            setActiveItem={setActiveItem}
          />
        </Box>
      </Main>
    </Grommet>
  )
}
