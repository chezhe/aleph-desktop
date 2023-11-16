import useEntryFlow from '@/hooks/useEntryFlow'
import useFeeds from '@/hooks/useFeeds'
import { ScrollView, Text, XStack, YStack } from 'tamagui'
import Favicon from './Favicon'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import EntryItem from './common/EntryItem'

dayjs.extend(relativeTime)

export default function HomeFlow() {
  const { entries } = useEntryFlow()
  const { feeds } = useFeeds()
  return (
    <YStack f={1}>
      <YStack w={300} h="100%" borderRightWidth={1} borderRightColor="$color8">
        <ScrollView>
          {entries.map((entry) => {
            const feed = feeds.find((t) => t.url === entry.feedUrl)

            return <EntryItem key={entry.id} entry={entry} feed={feed} />
          })}
        </ScrollView>
      </YStack>
    </YStack>
  )
}
