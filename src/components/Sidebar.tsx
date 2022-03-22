import { Box, Button, ThemeContext } from 'grommet'
import { Add, Search } from 'grommet-icons'
import { useState } from 'react'
import { Episode, Feed } from '../types'
import AddFeed from './AddFeed'
import Feeds from './Feeds'
import Folders from './Folders'
import Logo from './Logo'

export default function FeedList({
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

  return (
    <ThemeContext.Consumer>
      {(theme: any) => {
        const isDark = theme.dark
        return (
          <Box
            width="200px"
            background={isDark ? '#000' : 'light-3'}
            style={{ position: 'relative' }}
          >
            <Box
              height="calc(100vh - 50px)"
              pad={{
                top: 'medium',
                left: 'medium',
                right: 'small',
                bottom: '20px',
              }}
              style={{ overflowY: 'scroll', position: 'relative' }}
            >
              <Box>
                <Logo />
              </Box>
              <Folders activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
              <Feeds
                feeds={feeds}
                itemList={itemList}
                activeFeed={activeFeed}
                setActiveFeed={setActiveFeed}
              />
            </Box>

            <Box
              width="100%"
              height="50px"
              pad="small"
              direction="row"
              align="center"
              justify="between"
              background={isDark ? '#000' : 'light-3'}
            >
              <Button
                icon={<Add size="16" style={{ cursor: 'pointer' }} />}
                onClick={() => setVisible(true)}
              />
              <Button
                icon={<Search size="16" style={{ cursor: 'pointer' }} />}
                onClick={() => {}}
              />
            </Box>

            {visible && (
              <AddFeed
                onClose={() => setVisible(false)}
                setActiveFeed={setActiveFeed}
              />
            )}
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}
