import { Box, Button, Layer, Text, TextInput } from 'grommet'

export default function AddSource({ onClose }: { onClose: () => void }) {
  return (
    <Layer>
      <Box width="600px" pad="medium" gap="small">
        <Box>
          <Text weight="bold">Name</Text>
          <TextInput placeholder="Name" style={{ borderRadius: 0 }} />
        </Box>

        <Box>
          <Text weight="bold">RSS feed URL</Text>
          <TextInput type="url" placeholder="URL" style={{ borderRadius: 0 }} />
        </Box>

        <Box direction="row" align="center" justify="center" gap="medium">
          <Button
            label="Cancel"
            style={{ borderRadius: 0 }}
            onClick={onClose}
          />
          <Button label="Confirm" primary style={{ borderRadius: 0 }} />
        </Box>
      </Box>
    </Layer>
  )
}
