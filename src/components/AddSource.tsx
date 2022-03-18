import { Box, Button, Layer, Text, TextInput, RadioButtonGroup } from 'grommet'
import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { SourceType } from '../types'

export default function AddSource({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('不合时宜')
  const [url, setURL] = useState('https://feed.xyzfm.space/ww7cqnybekty')
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
            onClick={() => {
              dispatch({
                type: 'source/append',
                payload: {
                  name,
                  url,
                  type,
                },
              })
              onClose()
            }}
          />
        </Box>
      </Box>
    </Layer>
  )
}
