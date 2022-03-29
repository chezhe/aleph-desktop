import {
  Anchor,
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
import { CirclePlay, Compass, Star } from 'grommet-icons'
import { useAppDispatch } from '../store/hooks'
import { useEffect, useRef, useState } from 'react'
import { stripURL } from '../utils/format'

const turndownService = new TurndownService()

function MarkAnchor(props: any) {
  let label = props.title
  if (!label) {
    if (props.children && typeof props.children[0] === 'string') {
      label = props.children[0]
    }
  }
  return <Anchor label={label} href={props.href} target="_blank" />
}

export default function Reader({
  activeItem,
  playingEp,
  setPlayingEp,
}: {
  activeItem: Episode | undefined
  playingEp: Episode | undefined
  setPlayingEp: (ep: Episode | undefined) => void
}) {
  const dispatch = useAppDispatch()
  const readerContainer = useRef(null)
  const [isStarred, setIsStarred] = useState(activeItem?.starred ?? false)
  useEffect(() => {
    if (readerContainer && readerContainer.current) {
      ;(readerContainer.current as any).scrollTo(0, 0)
    }
  }, [activeItem])

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
            ref={readerContainer}
          >
            <Box
              direction="row"
              justify="end"
              pad={{ vertical: 'small' }}
              gap="small"
              border={{ side: 'bottom', size: 'medium', color: 'light-6' }}
            >
              {activeItem.link.startsWith('https://') && (
                <Button
                  icon={<Compass />}
                  href={activeItem.link}
                  target="_blank"
                />
              )}
              <Button
                icon={<Star color={isStarred ? 'plain' : ''} />}
                onClick={() => {
                  dispatch({
                    type: 'episode/star',
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
            <Box pad={{ bottom: 'medium' }}>
              {activeItem?.podurl && (
                <Button
                  icon={
                    <Box
                      width="200px"
                      height="200px"
                      align="center"
                      justify="center"
                      style={{
                        WebkitBackdropFilter: 'blur(3px)',
                        backdropFilter: 'blur(3px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <CirclePlay size="100px" />
                    </Box>
                  }
                  style={{
                    width: 200,
                    height: 200,
                    padding: 0,
                    backgroundImage: `url(${stripURL(
                      activeItem?.cover || ''
                    )})`,
                    backgroundSize: 'cover',
                  }}
                  onClick={() => {
                    if (!playingEp || playingEp.link !== activeItem.link) {
                      setPlayingEp(activeItem)
                    }
                  }}
                />
              )}
            </Box>
            <Markdown
              className="markdown-reader"
              components={{ a: MarkAnchor }}
            >
              {turndownService.turndown(content)}
            </Markdown>
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}
