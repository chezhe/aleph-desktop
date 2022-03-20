import { Box, dark, Grommet, grommet, Main } from 'grommet'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Episode } from '../types'
import { fetchFeed } from '../utils/network'
import { getValue } from '../utils/storage'
import ContentList from './ContentList'
import Playing from './Playing'
import PodPlayer from './PodPlayer'
import Reader from './Reader'
import Sidebar from './Sidebar'
// import TitleBar from './TitleBar'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [activeSource, setActiveSource] = useState('')
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [activeItem, setActiveItem] = useState<Episode | undefined>()
  const [playingEp, setPlayingEp] = useState<Episode | undefined>()

  const sourceList = useAppSelector((state) => state.source.list)
  const dispatch = useAppDispatch()

  const itemList = useAppSelector((state) => state.item.list)

  useEffect(() => {
    getValue('source')
      .then((result: any) => {
        console.log('###', result)
        if (result?.value) {
          dispatch({
            type: 'source/init',
            payload: JSON.parse(result.value),
          })
        }
      })
      .catch(console.log)

    getValue('itemstarreds')
      .then((result: any) => {
        if (result?.value) {
          dispatch({
            type: 'item/starAll',
            payload: JSON.parse(result.value),
          })
        }
      })
      .catch(console.log)

    // getValue('itemvieweds')
    //   .then((result: any) => {
    //     if (result?.value) {
    //       dispatch({
    //         type: 'item/readAll',
    //         payload: JSON.parse(result.value),
    //       })
    //     }
    //   })
    //   .catch(console.log)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    for (let index = 0; index < sourceList.length; index++) {
      fetchFeed(sourceList[index]).then((items) => {
        dispatch({
          type: 'item/concat',
          payload: items.map((item) => ({
            ...item,
            source: sourceList[index].name,
          })),
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grommet theme={grommet} themeMode="light" full>
      {/* <TitleBar /> */}
      <Main>
        <Box direction="row" width="100%">
          <Sidebar
            sources={sourceList}
            itemList={itemList}
            activeSource={activeSource}
            setEpisodes={setEpisodes}
            setActiveSource={setActiveSource}
          />
          <ContentList
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
