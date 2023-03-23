import { Box, Button, Heading, Text } from 'grommet'
import { SettingsOption } from 'grommet-icons'
import { useState } from 'react'
import { Episode, Feed } from '../types'
import ManageFeed from './ManageFeed'

export default function Feeds({
  feeds,
  activeFeed,
  itemList,
  setActiveFeed,
}: {
  feeds: Feed[]
  activeFeed: Feed | undefined
  itemList: Episode[]
  setActiveFeed: (feed: Feed) => void
}) {
  const [visible, setVisible] = useState(false)
  console.log('itemList', itemList)

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
        {feeds.map((feed, idx) => (
          <Box
            key={feed.name}
            pad="xxsmall"
            direction="row"
            align="center"
            justify="between"
            background={activeFeed?.id === feed.id ? 'light-6' : ''}
            onClick={() => {
              setActiveFeed(feed)
            }}
            style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
          >
            <Text
              size="small"
              style={{
                maxWidth: 100,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {feed.name}
            </Text>
            <Box background="">
              <Text size="small" color="neutral-3" weight="bold">
                {
                  itemList.filter(
                    (t) => t.feedid === feed.id && t.readed !== 'true'
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
