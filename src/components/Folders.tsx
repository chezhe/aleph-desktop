import { Box, Heading, Text } from 'grommet'
import { Star } from 'grommet-icons'
import { useAppSelector } from '../store/hooks'

export default function Folders() {
  const starreds = useAppSelector((state) => state.item.starreds)
  return (
    <Box>
      <Box>
        <Heading level={3} margin={{ bottom: 'small' }}>
          Folder
        </Heading>
      </Box>
      <Box pad={{ left: 'small' }}>
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="xsmall">
            <Star color="plain" />
            <Text size="small" weight="bold">
              Starred
            </Text>
          </Box>
          <Text size="small" color="neutral-3" weight="bold">
            {starreds.length}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
