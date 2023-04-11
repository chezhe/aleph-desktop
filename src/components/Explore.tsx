import { useAppSelector } from '@/store/hooks'
import { Feed, FeedType } from '@/types'
import { Podcast, Rss } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Image, ScrollView, Text, XStack, YStack } from 'tamagui'
import FeedSheet from './FeedSheet'

export default function Explore() {
  const [feed, setFeed] = useState<Feed>()
  const explore = useAppSelector((state) => state.feed.explore)
  const onOpenChange = (open: boolean) => {
    if (!open) {
      setFeed(undefined)
    }
  }

  return (
    <YStack>
      {explore.map((item) => {
        return (
          <YStack key={item.title} px={4} py={8}>
            <Text fontWeight="bold" fontSize={24} color="$color12" mx={16}>
              {item.title}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.items.map((item, idx) => {
                return (
                  <YStack key={idx} space={16} px={4} py={8} mx={16} my={16}>
                    <YStack
                      key={item.title}
                      space={4}
                      onPress={() => setFeed(item)}
                    >
                      <Image
                        source={{ uri: item.favicon }}
                        style={{
                          width: 160,
                          height: 160,
                          borderRadius: 4,
                        }}
                      />
                      <XStack
                        bc="gray"
                        position="absolute"
                        left={0}
                        top={0}
                        padding={4}
                        borderTopLeftRadius={4}
                        borderBottomRightRadius={4}
                      >
                        {item.type === FeedType.Podcast ? (
                          <Podcast size={24} color="white" />
                        ) : (
                          <Rss size={24} color="white" />
                        )}
                      </XStack>
                      <YStack>
                        <Text
                          fontSize={16}
                          color="$color11"
                          maxWidth={150}
                          numberOfLines={1}
                          fontWeight="bold"
                        >
                          {item.title}
                        </Text>
                      </YStack>
                    </YStack>
                  </YStack>
                )
              })}
            </ScrollView>
          </YStack>
        )
      })}
      <FeedSheet feed={feed} onOpenChange={onOpenChange} />
    </YStack>
  )
}
