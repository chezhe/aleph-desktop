import { Image } from 'tamagui'

export default function Favicon({
  favicon,
  size = 24,
  placeholder,
}: {
  favicon?: string
  size?: number
  placeholder?: boolean
}) {
  if (!favicon && !placeholder) {
    return null
  }

  return (
    <Image
      source={{ uri: favicon }}
      style={{
        width: size,
        height: size,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#999',
      }}
    />
  )
}
