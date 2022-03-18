import { Box, Grommet, grommet } from 'grommet'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Digest } from '../types'
import { fetchSources } from '../utils/network'
import { getValue } from '../utils/storage'
import ContentList from './ContentList'
import Reader from './Reader'
import Sidebar from './Sidebar'
// import TitleBar from './TitleBar'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const [activeItem, setActiveItem] = useState<Digest | undefined>()

  const sourceList = useAppSelector((state) => state.source.list)
  const dispatch = useAppDispatch()

  const itemList = useAppSelector((state) => state.item.list)

  useEffect(() => {
    // getValue('source')
    //   .then((result: any) => {
    //     if (result?.value) {
    //       dispatch({
    //         type: 'source/init',
    //         payload: JSON.parse(result.value),
    //       })
    //     }
    //   })
    //   .catch(console.log)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (sourceList.length > 0 && itemList.length === 0) {
      fetchSources(sourceList).then((items) => {
        sourceList.forEach((source, idx) => {
          dispatch({
            type: 'item/concat',
            payload: items[idx]?.map((item) => ({
              ...item,
              source: source.name,
            })),
          })
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceList, itemList])

  return (
    <Grommet theme={grommet}>
      {/* <TitleBar /> */}
      <Box direction="row" width="100%">
        <Sidebar
          sources={sourceList}
          itemList={itemList}
          active={active}
          setActive={(idx) => {
            setActive(idx)
            setActiveItem(undefined)
          }}
        />
        <ContentList
          activeSource={sourceList[active]}
          itemList={itemList}
          activeItem={activeItem}
          setActiveItem={(item) => {
            setActiveItem(item)
            dispatch({ type: 'item/read', payload: item })
          }}
        />
        <Reader activeItem={activeItem} />
      </Box>
    </Grommet>
  )
}
