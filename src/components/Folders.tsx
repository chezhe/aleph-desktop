import { Box, Heading, Text } from 'grommet'
import { Star } from 'grommet-icons'

export default function Folders() {
  return (
    <Box>
      <Box>
        <Heading level={3} margin={{ bottom: 'small' }}>
          Folder
        </Heading>
      </Box>
      <Box pad={{ left: 'small' }}>
        <Box direction="row" align="center" gap="xsmall">
          <Star color="plain" />
          <Text size="small" weight="bold">
            Starred
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
