import dayjs from 'dayjs'
import { Box, Button, Markdown, Text, Image } from 'grommet'
import { Episode } from '../types'
import TurndownService from 'turndown'
import { Ascend, Descend, Checkmark } from 'grommet-icons'
import Launch from '../assets/launch.png'
import { useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getEpisodeId } from '../utils/format'
import { PAGE_SIZE } from '../store/constants'

const turndownService = new TurndownService()

export default function ContentList({
  episodes,
  activeSource,
  activeItem,
  setActiveItem,
}: {
  episodes: Episode[]
  activeSource: string
  activeItem: Episode | undefined
  setActiveItem: (digest: Episode | undefined) => void
}) {
  const [page, setPage] = useState(1)
  const [isAscend, setIsAscend] = useState(true)
  const dispatch = useAppDispatch()
  const vieweds = useAppSelector((state) => state.item.vieweds)
  const listContainer = useRef(null)

  useEffect(() => {
    if (listContainer && listContainer.current) {
      ;(listContainer.current as any).scrollTo(0, 0)
    }
  }, [activeSource, isAscend])

  console.log(episodes)
  let _eposides = _.sortBy(episodes, [(t) => dayjs(t.pubDate).unix()])
  if (isAscend) {
    _eposides = _.reverse(_eposides)
  }
  return (
    <Box width="300px" background="light-1">
      <Box
        direction="row"
        height="40px"
        align="center"
        justify="between"
        background="light-3"
        pad={{ horizontal: 'small' }}
      >
        <Text size="small">
          <Text size="small" weight="bold" color="neutral-3">
            {episodes.length}
          </Text>
          <Text size="small"> in total</Text>
        </Text>
        <Box direction="row" align="center">
          <Button
            icon={isAscend ? <Descend /> : <Ascend />}
            a11yTitle="Sort"
            onClick={() => {
              setIsAscend(!isAscend)
            }}
          />
          <Button
            icon={<Checkmark />}
            a11yTitle="Read All"
            onClick={() => {
              dispatch({ type: 'item/readAll', payload: episodes })
            }}
          />
        </Box>
      </Box>

      {episodes.length === 0 ? (
        <Box height="100%" align="center" justify="end">
          <Image
            src={Launch}
            width="100px"
            style={{ opacity: 0.7 }}
            alt=""
            className="launch-image"
          />
        </Box>
      ) : (
        <Box
          height="calc(100vh - 40px)"
          style={{ overflowY: 'scroll' }}
          ref={listContainer}
        >
          {_eposides.slice(0, PAGE_SIZE * page).map((item, idx) => {
            const digest = turndownService.turndown(item?.description || '')
            let isActive = false
            if (item.guid) {
              isActive = item.guid === activeItem?.guid
            } else if (item.link) {
              isActive = item.link === activeItem?.link
            }
            return (
              <Box
                key={`${item.title}-${idx}`}
                pad={{ vertical: 'xsmall', horizontal: 'small' }}
                style={{
                  minHeight: 'unset',
                  cursor: 'pointer',
                  boxShadow: 'none',
                  opacity: vieweds.includes(getEpisodeId(item)) ? 0.7 : 1,
                }}
                border={{ side: 'bottom', size: 'xsmall', color: 'light-4' }}
                background={isActive ? 'neutral-3' : ''}
                onClick={() => setActiveItem(item)}
              >
                <Text size="small" weight="bolder">
                  {item.title}
                </Text>
                <Text size="xsmall" color="dark-6">
                  {dayjs(item.pubDate).format('YYYY-MM-DD HH:mm')}
                </Text>
                <Markdown className="markdown-digest">{digest}</Markdown>
              </Box>
            )
          })}

          {_eposides.length > PAGE_SIZE * page && (
            <Box align="center" pad="small">
              <Button
                label="Load more"
                primary
                style={{ borderRadius: 0, background: '#000' }}
                onClick={() => setPage(page + 1)}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}
