import {
  Box,
  Button,
  Heading,
  Image,
  Markdown,
  Text,
  ThemeContext,
} from 'grommet'
import { Episode } from '../types'
import TurndownService from 'turndown'
import dayjs from 'dayjs'
import NoContent from '../assets/no-content.png'
import { Star } from 'grommet-icons'
import { useAppDispatch } from '../store/hooks'
import { useState } from 'react'

const turndownService = new TurndownService()

export default function Reader({
  activeItem,
}: {
  activeItem: Episode | undefined
}) {
  const dispatch = useAppDispatch()
  const [isStarred, setIsStarred] = useState(activeItem?.starred ?? false)

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

  let content = activeItem.description
  return (
    <ThemeContext.Consumer>
      {(theme: any) => {
        const isDark = theme.dark
        return (
          <Box
            pad={{ horizontal: '50px', bottom: '100px' }}
            width="calc(100vw - 500px)"
            height="100vh"
            background={isDark ? 'dark-2' : '#f3f1eb'}
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
                icon={<Star color={isStarred ? 'plain' : ''} />}
                onClick={() => {
                  dispatch({
                    type: 'item/star',
                    payload: { ...activeItem, starred: isStarred },
                  })
                  setIsStarred(!isStarred)
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
      }}
    </ThemeContext.Consumer>
  )
}
