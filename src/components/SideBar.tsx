import { Text, XStack, YStack } from 'tamagui'
import {
  BookmarkEmpty,
  Home,
  Label,
  Planet,
  RssFeedTag,
  Settings,
} from 'iconoir-react'
import Logo from './Logo'
import Link from 'next/link'
import { MAIN_COLOR } from '@/lib/constants'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const routes = [
  {
    href: '/',
    title: 'Home',
    Icon: Home,
  },
  {
    href: '/tags',
    title: 'Tags',
    Icon: Label,
  },
  {
    href: '/feeds',
    title: 'Feeds',
    Icon: RssFeedTag,
  },
  {
    href: '/explore',
    title: 'Explore',
    Icon: Planet,
  },
  {
    href: '/bookmarks',
    title: 'Bookmarks',
    Icon: BookmarkEmpty,
  },
  {
    href: '/settings',
    title: 'Settings',
    Icon: Settings,
  },
]

export default function SideBar() {
  const current = useAppSelector((state) => state.setting.current || 'Home')
  const dispatch = useAppDispatch()
  return (
    <YStack
      p="$3"
      pb="$6"
      w={250}
      borderRightWidth={1}
      borderRightColor="$color8"
      h="100%"
      jc="space-between"
    >
      <YStack ai="flex-end" space="$3">
        <Logo />
        <Text>Aleph Reader</Text>
      </YStack>

      <YStack width="100%" space={8} ai="flex-end" pr={8}>
        {routes.map(({ href, title, Icon }) => {
          const isActive = current === title
          return (
            <XStack
              key={href}
              space={8}
              ai="center"
              jc="flex-end"
              cursor="pointer"
              onPress={() => {
                dispatch({
                  type: 'setting/navigate',
                  payload: title,
                })
              }}
            >
              <Text
                textAlign="right"
                fontWeight="bold"
                fontSize={32}
                fontFamily="Gilroy-Bold"
                width={200}
                color={MAIN_COLOR}
              >
                {title}
              </Text>
              <Icon width={30} height={30} color={MAIN_COLOR} />
            </XStack>
          )
        })}
      </YStack>
    </YStack>
  )
}
