import { Box, Heading, Text } from 'grommet'
import { Star } from 'grommet-icons'
import { useAppSelector } from '../store/hooks'
import { Feed, FeedType } from '../types'

export default function Folders({
  activeFeed,
  setActiveFeed,
}: {
  activeFeed: Feed | undefined
  setActiveFeed: (feed: Feed) => void
}) {
  const starreds = useAppSelector((state) =>
    state.episode.list.filter((t) => t.starred)
  )
  return (
    <Box margin={{ vertical: 'medium' }}>
      <Box>
        <Heading level={3} margin={{ vertical: 'xsmall' }}>
          Folder
        </Heading>
      </Box>
      <Box pad={{ left: 'small' }}>
        <Box
          direction="row"
          align="center"
          justify="between"
          gap="xsmall"
          pad="xxsmall"
          background={activeFeed?.id === 'starred' ? 'light-6' : ''}
          style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          onClick={() => {
            setActiveFeed({
              id: 'starred',
              name: 'Starred',
              url: '',
              type: FeedType.RSS,
            })
          }}
        >
          <Box direction="row" align="center" justify="between" gap="xsmall">
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
