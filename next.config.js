/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    // ...your configuration
  }

  const tamaguiPlugin = withTamagui({
    config: './src/tamagui.config.ts',
    components: ['tamagui'],
  })

  return {
    ...config,
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    ...tamaguiPlugin(config),
  }
}
