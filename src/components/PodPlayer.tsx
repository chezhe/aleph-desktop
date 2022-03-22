import { Box, Button, Image } from 'grommet'
import ReactAudioPlayer from 'react-audio-player'
import { Episode } from '../types'
import { stripURL } from '../utils/format'

export default function PodPlayer({
  playingEp,
  setPlayingEp,
  setActiveItem,
}: {
  playingEp: Episode | undefined
  setPlayingEp: (ep: Episode | undefined) => void
  setActiveItem: (ep: Episode | undefined) => void
}) {
  if (!playingEp) {
    return null
  }

  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ right: 'small' }}
      gap="small"
      style={{ position: 'fixed', bottom: 0, right: 0 }}
      background="light-5"
      width="calc(100vw - 500px)"
    >
      <Image src={stripURL(playingEp?.cover || '')} height="80px" alt="" />
      <ReactAudioPlayer
        src={stripURL(playingEp.podurl)}
        autoPlay
        controls
        style={{ width: '100%' }}
        onPlay={() => {
          // setPlayingEp(playingEp)
        }}
      />
      <Box width="100px" gap="xsmall">
        <Button
          size="small"
          label="Close"
          style={{ borderRadius: 0 }}
          onClick={() => setPlayingEp(undefined)}
        />

        <Button
          size="small"
          label="EP"
          style={{ borderRadius: 0 }}
          onClick={() => setActiveItem(playingEp)}
        />
      </Box>
    </Box>
  )
}
