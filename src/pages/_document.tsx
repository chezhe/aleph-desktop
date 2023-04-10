import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { Children } from 'react'

import { AppRegistry } from 'react-native'
import Tamagui from '../tamagui.config'

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)

    const page = await renderPage()

    // @ts-ignore

    const { getStyleElement } = AppRegistry.getApplication('Main')

    const styles = [
      getStyleElement(),

      <style dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }} />,
    ]

    return { ...page, styles: Children.toArray(styles) }
  }
  render() {
    return (
      <Html>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
