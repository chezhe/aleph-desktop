import { Layer, Box, Text, Button } from 'grommet'
import { Close, Edit, Trash } from 'grommet-icons'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Feed, FeedType } from '../types'
import AddFeed from './AddFeed'
import { RSS, Podcast } from './icons'

export default function ManageFeed({ onClose }: { onClose: () => void }) {
  const [editingEp, setEditingEp] = useState<Feed | undefined>()
  const feeds = useAppSelector((state) => state.feed.list)
  const dispatch = useAppDispatch()
  return (
    <Layer onClickOutside={onClose}>
      <Box pad="small" gap="small">
        <Box
          direction="row"
          justify="end"
          border={{
            side: 'bottom',
            size: 'medium',
            color: 'light-3',
          }}
        >
          <Button size="small" icon={<Close size="16px" />} onClick={onClose} />
        </Box>
        <Box width="600px" height="400px" style={{ overflowY: 'scroll' }}>
          {feeds.map((feed) => {
            return (
              <Box
                key={feed.name}
                direction="row"
                align="center"
                justify="between"
                border={{
                  side: 'bottom',
                  size: 'xsmall',
                  style: 'dashed',
                }}
                pad="small"
              >
                <Box direction="row" align="center" gap="small">
                  {feed.type === FeedType.PODCAST ? <Podcast /> : <RSS />}
                  <Text>{feed.name}</Text>
                </Box>

                <Box direction="row" align="center" gap="small">
                  <Button
                    icon={<Edit />}
                    size="small"
                    onClick={() => {
                      setEditingEp(feed)
                    }}
                  />
                  <Button
                    icon={<Trash />}
                    size="small"
                    onClick={() => {
                      dispatch({
                        type: 'feed/remove',
                        payload: feed,
                      })
                    }}
                  />
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      {!!editingEp && (
        <AddFeed
          feed={editingEp}
          setActiveFeed={() => {}}
          onClose={() => {
            setEditingEp(undefined)
          }}
        />
      )}
    </Layer>
  )
}
