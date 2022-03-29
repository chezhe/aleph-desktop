import { sendNotification } from '@tauri-apps/api/notification'
import { Box, Button, Layer, Text, TextInput, RadioButtonGroup } from 'grommet'
import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { Feed, FeedType } from '../types'
import { fetchFeed } from '../utils/network'
import { createFeed, removeFeed } from '../utils/storage'

export default function AddFeed({
  onClose,
  setActiveFeed,
  feed = undefined,
}: {
  onClose: () => void
  setActiveFeed: (feed: Feed) => void
  feed?: Feed | undefined
}) {
  const [name, setName] = useState(feed?.name ?? '')
  const [url, setURL] = useState(feed?.url ?? '')
  const [type, setType] = useState(feed?.type ?? FeedType.RSS)
  const [isAdding, setIsAdding] = useState(false)
  const dispatch = useAppDispatch()
  return (
    <Layer>
      <Box width="600px" pad="medium" gap="small">
        <Box gap="xsmall">
          <Text weight="bold">Name</Text>
          <TextInput
            placeholder="Name"
            disabled={isAdding}
            style={{ borderRadius: 0 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box gap="xsmall">
          <Text weight="bold">RSS feed URL</Text>
          <TextInput
            type="url"
            placeholder="URL"
            disabled={isAdding}
            style={{ borderRadius: 0 }}
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
        </Box>

        <Box gap="xsmall">
          <Text weight="bold">Type</Text>
          <Box>
            <RadioButtonGroup
              name="doc"
              disabled={isAdding}
              options={[FeedType.RSS, FeedType.PODCAST]}
              value={type}
              onChange={(event) => setType(event.target.value as FeedType)}
            />
          </Box>
        </Box>

        <Box direction="row" align="center" justify="center" gap="medium">
          <Button
            label="Cancel"
            disabled={isAdding}
            style={{ borderRadius: 0 }}
            onClick={onClose}
          />
          <Button
            label="Confirm"
            primary
            disabled={isAdding}
            style={{ borderRadius: 0 }}
            onClick={async () => {
              const _feed = {
                name,
                url,
                type,
              }
              if (feed) {
                const newFeed = {
                  ..._feed,
                  id: feed.id,
                }
                dispatch({
                  type: 'feed/update',
                  payload: newFeed,
                })
                onClose()
              } else {
                try {
                  setIsAdding(true)
                  const newFeed = await createFeed(_feed)

                  const episodes = await fetchFeed(newFeed)
                  if (episodes.length === 0) {
                    removeFeed(newFeed)
                    throw new Error('No episodes found')
                  }
                  dispatch({
                    type: 'feed/append',
                    payload: newFeed,
                  })
                  dispatch({
                    type: 'episode/concat',
                    payload: episodes,
                  })
                  setActiveFeed(newFeed)

                  setIsAdding(false)
                  onClose()
                } catch (error: any) {
                  setIsAdding(false)
                  sendNotification(error?.message)
                }
              }
            }}
          />
        </Box>
      </Box>
    </Layer>
  )
}
