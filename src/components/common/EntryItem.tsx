import { Feed, FeedEntry } from '@/types'
import { Text, XStack, YStack } from 'tamagui'
import Favicon from '../Favicon'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function EntryItem({
  entry,
  feed,
}: {
  entry: FeedEntry
  feed?: Feed
}) {
  let opacity = 1
  let fontWeight = '600'
  if (entry.read) {
    opacity = 0.6
    fontWeight = '300'
  } else {
    fontWeight = '400'
  }
  return (
    <YStack
      key={entry.id}
      o={opacity}
      borderBottomWidth={1}
      px="$2"
      py="$3"
      space="$2"
      borderBottomColor="$borderColor"
      cursor="pointer"
    >
      {feed && (
        <XStack space={4} alignItems="center">
          <Favicon favicon={feed.favicon} size={20} />
          <Text color="$color11" numberOfLines={1} ellipsizeMode="tail">
            {feed.title}
          </Text>
          <Text fontSize={12} color="$gray10" marginLeft={10}>
            {dayjs(entry.published).fromNow()}
          </Text>
        </XStack>
      )}
      <Text
        fontSize={18}
        fontWeight={fontWeight}
        lineHeight={20}
        color="$color12"
      >
        {entry.title || 'Untitled'}
      </Text>
    </YStack>
  )
}
