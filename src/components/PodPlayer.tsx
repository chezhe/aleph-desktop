import { Box, Image } from 'grommet'
import ReactAudioPlayer from 'react-audio-player'
import { Episode } from '../types'
import { stripURL } from '../utils/format'

export default function PodPlayer({
  activeItem,
  setPlayingEp,
}: {
  activeItem: Episode | undefined
  setPlayingEp: (ep: Episode | undefined) => void
}) {
  if (!activeItem || !activeItem.podurl) {
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
      <Image src={stripURL(activeItem?.cover || '')} height="80px" alt="" />
      <ReactAudioPlayer
        src={stripURL(activeItem.podurl)}
        controls
        style={{ width: '100%' }}
        onPlay={() => {
          setPlayingEp(activeItem)
        }}
      />
    </Box>
  )
}
