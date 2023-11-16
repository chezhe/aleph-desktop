import { useAppSelector } from '@/store/hooks'
import { YStack } from 'tamagui'
import Explore from './Explore'
import Feeds from './Feeds'
import HomeFlow from './HomeFlow'

export default function Content() {
  const current = useAppSelector((state) => state.setting.current)
  if (current === 'Explore') {
    return <Explore />
  }
  if (current === 'Feeds') {
    return <Feeds />
  }
  if (current === 'Home') {
    return <HomeFlow />
  }
  return <YStack></YStack>
}
