import { Box, Button, Heading, Image, Markdown, Text } from 'grommet'
import { Digest } from '../types'
import TurndownService from 'turndown'
import dayjs from 'dayjs'
import NoContent from '../assets/no-content.png'
import { Archive, Star } from 'grommet-icons'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { isContained } from '../utils/format'

const turndownService = new TurndownService()

export default function Reader({
  activeItem,
}: {
  activeItem: Digest | undefined
}) {
  const dispatch = useAppDispatch()
  const starreds = useAppSelector((state) => state.item.starreds)

  if (!activeItem) {
    return (
      <Box
        pad={{ top: '40px', horizontal: '50px' }}
        width="calc(100vw - 500px)"
        height="100vh"
        background="#f3f1eb"
        align="center"
        justify="center"
        style={{ overflowY: 'scroll', position: 'relative' }}
      >
        <Image src={NoContent} width="300px" style={{ opacity: 0.7 }} alt="" />
      </Box>
    )
  }

  const _isStarred = isContained(activeItem, starreds)
  let content = ''
  if (activeItem['content:encoded']) {
    content = activeItem['content:encoded']
  } else {
    content = activeItem?.description || ''
  }
  return (
    <Box
      pad={{ horizontal: '50px', bottom: '100px' }}
      width="calc(100vw - 500px)"
      height="100vh"
      background="#f3f1eb"
      style={{ overflowY: 'scroll', position: 'relative' }}
    >
      <Box
        direction="row"
        justify="end"
        pad={{ vertical: 'small' }}
        gap="small"
        border={{ side: 'bottom', size: 'medium', color: 'light-6' }}
      >
        {/* <Button icon={<Archive />} /> */}
        <Button
          icon={<Star color={_isStarred ? 'plain' : ''} />}
          onClick={() => {
            dispatch({ type: 'item/star', payload: activeItem })
          }}
        />
      </Box>
      <Heading level={2} margin={{ bottom: '0' }}>
        {activeItem?.title}
      </Heading>
      <Text size="small" color="dark-6" margin={{ vertical: 'small' }}>
        {dayjs(activeItem?.pubDate).format('YYYY-MM-DD HH:mm')}
      </Text>
      <Markdown className="markdown-reader">
        {turndownService.turndown(content)}
      </Markdown>
    </Box>
  )
}
