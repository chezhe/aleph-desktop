import { Box, Heading, Text } from 'grommet'
import { Star } from 'grommet-icons'
import { useAppSelector } from '../store/hooks'
import { Source, SourceType } from '../types'

export default function Folders({
  activeSource,
  setActiveSource,
}: {
  activeSource: Source | undefined
  setActiveSource: (source: Source) => void
}) {
  const starreds = useAppSelector((state) =>
    state.item.list.filter((t) => t.starred)
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
          background={activeSource?.id === 'starred' ? 'light-6' : ''}
          style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          onClick={() => {
            setActiveSource({
              id: 'starred',
              name: 'Starred',
              url: '',
              type: SourceType.RSS,
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
