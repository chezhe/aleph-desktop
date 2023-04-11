import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from 'react-native'
import { useAppSelector } from '@/store/hooks'

export default function useTheme(): NonNullable<ColorSchemeName> {
  // const themeSetting = useAppSelector((state) => state.setting.theme)
  const systemTheme = _useColorScheme() as NonNullable<ColorSchemeName>
  // if (!themeSetting || themeSetting.toLowerCase() === 'auto') {
  //   return systemTheme
  // }
  return systemTheme as NonNullable<ColorSchemeName>
}
