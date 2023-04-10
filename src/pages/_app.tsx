import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

import { AppProps } from 'next/app'

import Head from 'next/head'

import React, { useMemo, useState } from 'react'

import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme()
  // memo to avoid re-render on dark/light change

  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps])
  // because we do our custom getCSS() above, we disableInjectCSS here

  return (
    <>
      <Head>{/* ... */}</Head>

      <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}
