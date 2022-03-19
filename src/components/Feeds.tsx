import { Box, Button, Heading, Text } from 'grommet'
import { SettingsOption } from 'grommet-icons'
import { useAppSelector } from '../store/hooks'
import { Episode, Source } from '../types'
import { getEpisodeId } from '../utils/format'

export default function Feeds({
  sources,
  activeSource,
  itemList,
  setEpisodes,
  setActiveSource,
}: {
  sources: Source[]
  activeSource: string
  itemList: Episode[]
  setEpisodes: (episodes: Episode[]) => void
  setActiveSource: (source: string) => void
}) {
  const vieweds = useAppSelector((state) => state.item.vieweds)

  return (
    <Box>
      <Box
        direction="row"
        align="center"
        justify="between"
        pad={{ vertical: 'small' }}
      >
        <Heading level={3} margin="none">
          Feeds
        </Heading>

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
            background={activeSource === source.name ? 'light-6' : ''}
            onClick={() => {
              setEpisodes(itemList.filter((t) => t.source === source.name))
              setActiveSource(source.name)
            }}
            style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          >
            <Text size="small">{source.name}</Text>
            <Box background="">
              <Text size="small" color="neutral-3" weight="bold">
                {
                  itemList.filter(
                    (t) =>
                      t.source === source.name &&
                      !vieweds.includes(getEpisodeId(t))
                  ).length
                }
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
