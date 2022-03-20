import { Box, Button, Image } from 'grommet'
import { Close } from 'grommet-icons'
import ReactAudioPlayer from 'react-audio-player'
import { Episode } from '../types'

export default function Playing({
  activeItem,
  playingEp,
  setPlayingEp,
}: {
  activeItem: Episode | undefined
  playingEp: Episode | undefined
  setPlayingEp: (ep: Episode | undefined) => void
}) {
  if (
    !playingEp ||
    (playingEp &&
      activeItem &&
      activeItem?.enclosure?.url === playingEp?.enclosure?.url)
  ) {
    return null
  }
  return (
    <Box
      direction="column"
      style={{ position: 'fixed', bottom: 100, right: 0 }}
      width="80px"
    >
      <Box
        direction="row"
        justify="end"
        style={{ position: 'relative', top: 60, right: 20 }}
      >
        <Button
          icon={<Close size="small" />}
          onClick={() => setPlayingEp(undefined)}
          size="small"
          primary
        />
      </Box>
      <Image
        src={playingEp?.cover}
        width="80px"
        height="80px"
        alt={playingEp?.title}
      />

      <ReactAudioPlayer
        src={playingEp!.enclosure!.url}
        controls
        autoPlay
        style={{ width: '100%', visibility: 'hidden' }}
        onPlay={() => {
          setPlayingEp(playingEp)
        }}
      />
    </Box>
  )
}
