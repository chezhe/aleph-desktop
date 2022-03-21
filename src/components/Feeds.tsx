import { Box, Button, Heading, Text } from 'grommet'
import { SettingsOption } from 'grommet-icons'
import { useState } from 'react'
import { Episode, Source } from '../types'
import ManageFeed from './ManageFeed'

export default function Feeds({
  sources,
  activeSource,
  itemList,
  setActiveSource,
}: {
  sources: Source[]
  activeSource: Source | undefined
  itemList: Episode[]
  setActiveSource: (source: Source) => void
}) {
  const [visible, setVisible] = useState(false)

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
          onClick={() => setVisible(true)}
        />
      </Box>

      {visible && <ManageFeed onClose={() => setVisible(false)} />}

      <Box pad={{ left: 'small' }}>
        {sources.map((source, idx) => (
          <Box
            key={source.name}
            pad="xxsmall"
            direction="row"
            align="center"
            justify="between"
            background={activeSource?.id === source.id ? 'light-6' : ''}
            onClick={() => {
              setActiveSource(source)
            }}
            style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          >
            <Text size="small">{source.name}</Text>
            <Box background="">
              <Text size="small" color="neutral-3" weight="bold">
                {
                  itemList.filter((t) => t.feedid === source.id && !t.readed)
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
