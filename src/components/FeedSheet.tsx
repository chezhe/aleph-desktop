import useFeed from '@/hooks/useFeed'
import { MAIN_COLOR } from '@/lib/constants'
import { resubFeed, subFeed, unsubFeed } from '@/lib/db'
import { useState } from 'react'
import { Anchor, Button, Sheet, Text, YStack } from 'tamagui'
import { Feed } from '@/types'
import Favicon from '@/components/Favicon'

export default function FeedSheet({
  feed,
  onOpenChange,
}: {
  feed?: Feed
  onOpenChange: (open: boolean) => void
}) {
  const oldSub = useFeed(feed?.url)
  const [position, setPosition] = useState(0)

  const onSub = async () => {
    try {
      if (!feed) {
        throw new Error("Can't subscribe to undefined feed")
      }
      if (oldSub) {
        if (oldSub.deleted) {
          await resubFeed(feed)
          // Toast.success('Subscribed!')
        } else {
          await unsubFeed(feed)
          // Toast.success('Unsubscribed')
        }
      } else {
        await subFeed(feed)
        // Toast.success('Subscribed!')
      }
      onOpenChange(false)
    } catch (error) {
      // Toast.error(error)
    }
  }

  return (
    <Sheet
      forceRemoveScrollEnabled={!!feed}
      modal
      open={!!feed}
      onOpenChange={onOpenChange}
      snapPoints={[40]}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame f={1} p="$4">
        {feed && (
          <YStack ai="center" space={8} px={16}>
            <Favicon favicon={feed.favicon} size={72} />
            <Text
              fontSize={20}
              fontWeight="bold"
              color="$color12"
              ta="center"
              numberOfLines={1}
            >
              {feed.title}
            </Text>
            <YStack space={0} ai="center">
              <Text
                fontSize={16}
                color="$color11"
                numberOfLines={3}
                ta="center"
              >
                {feed.description}
              </Text>
              <Anchor
                href={feed.url}
                color="$blue10"
                numberOfLines={1}
                ta="center"
              >
                {feed.url}
              </Anchor>
            </YStack>
            <Button bc={MAIN_COLOR} color="white" onPress={onSub}>
              {oldSub && !oldSub.deleted ? 'Unsubscribe' : 'Subscribe'}
            </Button>
          </YStack>
        )}
      </Sheet.Frame>
    </Sheet>
  )
}
