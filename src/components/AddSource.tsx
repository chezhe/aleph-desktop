import { sendNotification } from '@tauri-apps/api/notification'
import { Box, Button, Layer, Text, TextInput, RadioButtonGroup } from 'grommet'
import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { SourceType } from '../types'
import { fetchFeed } from '../utils/network'
import { createFeed } from '../utils/storage'

export default function AddSource({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [url, setURL] = useState('')
  const [type, setType] = useState(SourceType.RSS)
  const dispatch = useAppDispatch()
  return (
    <Layer>
      <Box width="600px" pad="medium" gap="small">
        <Box gap="xsmall">
          <Text weight="bold">Name</Text>
          <TextInput
            placeholder="Name"
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
              options={[SourceType.RSS, SourceType.PODCAST]}
              value={type}
              onChange={(event) => setType(event.target.value as SourceType)}
            />
          </Box>
        </Box>

        <Box direction="row" align="center" justify="center" gap="medium">
          <Button
            label="Cancel"
            style={{ borderRadius: 0 }}
            onClick={onClose}
          />
          <Button
            label="Confirm"
            primary
            style={{ borderRadius: 0 }}
            onClick={async () => {
              try {
                const _feed = {
                  name,
                  url,
                  type,
                }
                const newFeed = await createFeed(_feed)

                dispatch({
                  type: 'source/append',
                  payload: newFeed,
                })
                const episodes = await fetchFeed(newFeed)
                dispatch({
                  type: 'item/concat',
                  payload: episodes,
                })
                onClose()
              } catch (error: any) {
                sendNotification(error?.message)
              }
            }}
          />
        </Box>
      </Box>
    </Layer>
  )
}
