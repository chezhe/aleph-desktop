import useFeeds from '@/hooks/useFeeds'
import { PlusCircle } from '@tamagui/lucide-icons'
import { Heading, Text, XStack, YStack } from 'tamagui'
import Favicon from './Favicon'
import useEntryFlow from '@/hooks/useEntryFlow'

export default function Feeds() {
  const { feeds } = useFeeds()
  const { entries } = useEntryFlow()

  return (
    <XStack f={1}>
      <YStack w={250} h="100%" borderRightWidth={1} borderRightColor="$color8">
        <XStack w="100%" ai="center" jc="space-between" px="$3">
          <Heading>Feeds</Heading>
          <PlusCircle size={24} />
        </XStack>
        <YStack>
          {feeds.map((feed) => {
            const unreadCount =
              entries.filter((t) => !t.read && t.feedUrl === feed.url).length ||
              0
            return (
              <XStack
                key={feed.url}
                space={8}
                alignItems="center"
                paddingVertical={12}
                backgroundColor="$background"
                px={12}
                borderBottomWidth={1}
                borderBottomColor="$color8"
                cursor="pointer"
              >
                <Favicon favicon={feed.favicon} />
                <XStack
                  flex={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text
                    fontSize={16}
                    maxWidth={180}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    color="$color11"
                  >
                    {feed.title}
                  </Text>
                  <Text fontSize={14} color="$gray9Light">
                    {unreadCount}
                  </Text>
                </XStack>
              </XStack>
            )
          })}
        </YStack>
      </YStack>
    </XStack>
  )
}
