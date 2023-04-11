import { useAppSelector } from '@/store/hooks'
import { YStack } from 'tamagui'
import Explore from './Explore'

export default function Content() {
  const current = useAppSelector((state) => state.setting.current)
  if (current === 'Explore') {
    return <Explore />
  }
  return <YStack></YStack>
}
