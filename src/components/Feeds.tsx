import { Box, Button, Heading, Text } from 'grommet'
import { SettingsOption } from 'grommet-icons'
import { Episode, Source } from '../types'

export default function Feeds({
  sources,
  active,
  setActive,
  itemList,
}: {
  sources: Source[]
  active: number
  setActive: (active: number) => void
  itemList: Episode[]
}) {
  return (
    <Box>
      <Box
        direction="row"
        align="center"
        justify="between"
        margin={{ bottom: 'xsmall' }}
      >
        <Heading level={3}>Feeds</Heading>

        <Button
          size="small"
          icon={<SettingsOption size="18px" />}
          style={{ padding: 0 }}
          onClick={() => {}}
        />
      </Box>

      <Box pad={{ left: 'small' }}>
        {sources.map((source, idx) => (
          <Box
            key={source.name}
            pad="xxsmall"
            direction="row"
            align="center"
            justify="between"
            background={active === idx ? 'light-6' : ''}
            onClick={() => setActive(idx)}
            style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          >
            <Text size="small">{source.name}</Text>
            <Box background="">
              <Text size="small" color="neutral-3" weight="bold">
                {
                  itemList.filter((t) => t.source === source.name && !t.read)
                    .length
                }
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
