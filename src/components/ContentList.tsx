import dayjs from 'dayjs'
import { Box, Markdown, Text } from 'grommet'
import { Channel, Digest } from '../types'
import TurndownService from 'turndown'

const turndownService = new TurndownService()

export default function ContentList({
  channel,
  activeItem,
  setActiveItem,
}: {
  channel: Channel | undefined
  activeItem: Digest | undefined
  setActiveItem: (digest: Digest | undefined) => void
}) {
  return (
    <Box
      width="300px"
      background="light-1"
      height="100vh"
      style={{ overflowY: 'scroll' }}
    >
      {channel?.item?.map((item) => {
        const digest = turndownService.turndown(item?.description || '')
        return (
          <Box
            key={item.title}
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            style={{ minHeight: 'unset', cursor: 'pointer', boxShadow: 'none' }}
            border={{ side: 'bottom', size: 'xsmall', color: 'light-4' }}
            background={item.link === activeItem?.link ? 'neutral-3' : ''}
            onClick={() => setActiveItem(item)}
          >
            <Text size="small" weight="bolder">
              {item.title}
            </Text>
            <Text size="xsmall" color="dark-6">
              {dayjs(item.pubDate).format('YYYY-MM-DD HH:mm')}
            </Text>
            <Markdown className="markdown-digest">{digest}</Markdown>
          </Box>
        )
      })}
    </Box>
  )
}
