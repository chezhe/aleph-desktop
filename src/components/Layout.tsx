import { Box, Grommet, grommet, Main } from 'grommet'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Episode, Source } from '../types'
import { fetchFeed } from '../utils/network'
import { allEpisodes, allFeeds, connect } from '../utils/storage'
import EpisodeList from './EpisodeList'
import Playing from './Playing'
import PodPlayer from './PodPlayer'
import Reader from './Reader'
import Sidebar from './Sidebar'
// import TitleBar from './TitleBar'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [activeSource, setActiveSource] = useState<Source | undefined>()
  const [activeItem, setActiveItem] = useState<Episode | undefined>()
  const [playingEp, setPlayingEp] = useState<Episode | undefined>()

  const sourceList = useAppSelector((state) => state.source.list)
  const dispatch = useAppDispatch()

  const itemList = useAppSelector((state) => state.item.list)

  useEffect(() => {
    connect().then(() => {})
    setTimeout(() => {
      allFeeds()
        .then((feeds: Source[]) => {
          dispatch({
            type: 'source/init',
            payload: feeds,
          })
          allEpisodes().then((episodes: Episode[]) => {
            dispatch({
              type: 'item/init',
              payload: episodes,
            })

            feeds.forEach((feed) => {
              fetchFeed(feed).then((episodes) => {
                dispatch({
                  type: 'item/concat',
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

  const episodes = itemList.filter((item) => {
    if (activeSource) {
      if (activeSource.id === 'starred') {
        return item.starred
      }
      return item.feedid === activeSource.id
    }
    return false
  })

  return (
    <Grommet theme={grommet} themeMode="light" full>
      {/* <TitleBar /> */}
      <Main>
        <Box direction="row" width="100%">
          <Sidebar
            sources={sourceList}
            itemList={itemList}
            activeSource={activeSource}
            setActiveSource={setActiveSource}
          />
          <EpisodeList
            activeSource={activeSource}
            episodes={episodes}
            activeItem={activeItem}
            setActiveItem={(item) => {
              setActiveItem(item)
              dispatch({ type: 'item/read', payload: item })
            }}
          />
          <Reader activeItem={activeItem} />

          <PodPlayer activeItem={activeItem} setPlayingEp={setPlayingEp} />

          <Playing
            activeItem={activeItem}
            playingEp={playingEp}
            setPlayingEp={setPlayingEp}
          />
        </Box>
      </Main>
    </Grommet>
  )
}
