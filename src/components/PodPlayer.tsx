import { Box, Button, RangeInput, Text, Image } from 'grommet'
import { Pause, Play, Power } from 'grommet-icons'
import { useEffect, useState } from 'react'
import { Episode } from '../types'
import { stripURL } from '../utils/format'
import Loading from 'react-loading'
import { transcript } from '../utils/network'
import Caption from './Caption'
import Caption_On from '../assets/captions-on.svg'
import Caption_Off from '../assets/captions-off.svg'

const formatMinutes = (seconds: number) => {
  const _seconds = Math.floor(seconds)
  const minutes = Math.floor(_seconds / 60)
  const secondsLeft = _seconds % 60
  return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
}

const useAudio = (url?: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    let tick: NodeJS.Timer
    if (url) {
      if (audio) {
        setReady(false)
        audio?.pause()
        setAudio(null)
      }
      const _audio = new Audio(url)
      if (_audio) {
        _audio.addEventListener('canplaythrough', async (event) => {
          setDuration(_audio.duration)
          setReady(true)
          _audio.play()
          setPlaying(true)
        })

        _audio.addEventListener('timeupdate', (event) => {
          setCurrentTime(_audio.currentTime)
        })
        setAudio(_audio)
      }
    }

    return () => {
      audio?.pause()
      setAudio(null)
      tick && clearInterval(tick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  useEffect(() => {
    if (audio) {
      if (playing) {
        audio.play()
      } else {
        audio.pause()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing])

  return { audio, playing, currentTime, duration, setPlaying, ready }
}

export default function PodPlayer({
  playingEp,
  setPlayingEp,
  setActiveItem,
}: {
  playingEp: Episode | undefined
  setPlayingEp: (ep: Episode | undefined) => void
  setActiveItem: (ep: Episode | undefined) => void
}) {
  const { audio, duration, currentTime, playing, setPlaying, ready } = useAudio(
    stripURL(playingEp?.podurl)
  )

  const [words, setWords] = useState([])

  const [captionEnable, setCaptionEnable] = useState(false)

  const fetchCaption = async () => {
    if (!playingEp) {
      return
    }
    try {
      const result = await transcript(playingEp?.podurl!)

      const words = (result as any).data.words
      if (Array.isArray(words)) {
        setWords(words as any)
      } else {
        setTimeout(fetchCaption, 5000)
      }
    } catch (error) {
      console.log('###fetchCaption', error)
    }
  }

  const onCaptionEnable = async () => {
    try {
      setCaptionEnable(!captionEnable)
      fetchCaption()
    } catch (error) {
      console.log('###onCaptionEnable', error)
    }
  }

  useEffect(() => {
    setWords([])
  }, [playingEp?.podurl])

  if (!playingEp || !audio) {
    return null
  }

  if (!ready) {
    return (
      <Box
        direction="row"
        align="center"
        justify="center"
        pad={{ right: 'small' }}
        gap="2px"
        height="80px"
        style={{ position: 'fixed', bottom: 0, right: 0 }}
        background="light-5"
        width="calc(100vw - 500px)"
      >
        <Loading type="bars" color="#008cd5" />
      </Box>
    )
  }

  return (
    <Box
      direction="column"
      style={{ position: 'fixed', bottom: 0, right: 0 }}
      background="light-5"
      width="calc(100vw - 500px)"
    >
      {captionEnable && <Caption words={words} currentTime={currentTime} />}
      <Box
        direction="row"
        align="center"
        justify="between"
        pad={{ right: 'small' }}
        gap="2px"
        onClick={() => setActiveItem(playingEp)}
      >
        <Button
          style={{
            background: `url(${stripURL(playingEp?.cover || '')})`,
            width: 80,
            height: 80,
            backgroundSize: 'cover',
            borderRadius: 0,
            border: 0,
            padding: 0,
          }}
          icon={
            <Box
              fill
              background="rgba(255,255,255,0.3)"
              align="center"
              justify="center"
              onClick={() => setPlaying(!playing)}
            >
              <Box
                background="rgba(0,0,0,0.7)"
                pad="small"
                style={{ borderRadius: '50%' }}
              >
                {!playing ? <Play /> : <Pause />}
              </Box>
            </Box>
          }
        />

        <Button
          size="small"
          plain
          icon={
            <Image
              src={captionEnable ? Caption_On : Caption_Off}
              width={30}
              alt=""
            />
          }
          style={{ borderRadius: 0 }}
          onClick={onCaptionEnable}
        />
        <Box direction="column" gap="2px">
          <RangeInput
            max={duration}
            value={currentTime}
            onChange={(e) => {
              audio!.currentTime = Number(e.target.value)
            }}
            style={{ minWidth: 400 }}
          />
          <Box direction="row" align="center" justify="between">
            <Text size="small">{formatMinutes(currentTime)}</Text>
            <Text size="small">{formatMinutes(duration)}</Text>
          </Box>
        </Box>
        <Box width="50px" gap="xsmall">
          <Button
            size="small"
            icon={<Power color="red" />}
            plain
            style={{ borderRadius: 0 }}
            onClick={() => {
              setPlaying(false)
              setPlayingEp(undefined)
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
