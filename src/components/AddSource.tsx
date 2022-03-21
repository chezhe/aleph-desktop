import { sendNotification } from '@tauri-apps/api/notification'
import { Box, Button, Layer, Text, TextInput, RadioButtonGroup } from 'grommet'
import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { Source, SourceType } from '../types'
import { fetchFeed } from '../utils/network'
import { createFeed } from '../utils/storage'

export default function AddSource({
  onClose,
  setActiveSource,
}: {
  onClose: () => void
  setActiveSource: (source: Source) => void
}) {
  const [name, setName] = useState('')
  const [url, setURL] = useState('')
  const [type, setType] = useState(SourceType.RSS)
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
              options={[SourceType.RSS, SourceType.PODCAST]}
              value={type}
              onChange={(event) => setType(event.target.value as SourceType)}
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
              try {
                setIsAdding(true)
                const _feed = {
                  name,
                  url,
                  type,
                }
                const newFeed = await createFeed(_feed)

                const episodes = await fetchFeed(newFeed)
                if (episodes.length === 0) {
                  throw new Error('No episodes found')
                }
                dispatch({
                  type: 'source/append',
                  payload: newFeed,
                })
                dispatch({
                  type: 'item/concat',
                  payload: episodes,
                })
                setActiveSource(newFeed)
                setIsAdding(false)
                onClose()
              } catch (error: any) {
                setIsAdding(false)
                sendNotification(error?.message)
              }
            }}
          />
        </Box>
      </Box>
    </Layer>
  )
}
