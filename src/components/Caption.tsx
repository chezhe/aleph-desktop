import { Box, Text } from 'grommet'
import { useEffect, useState } from 'react'
import Loading from 'react-loading'
import { TranscriptWord } from '../types'

export default function Caption({
  words,
  currentTime,
}: {
  words: TranscriptWord[]
  currentTime: number
}) {
  const [curr, setCurr] = useState(currentTime)

  useEffect(() => {
    if (currentTime - curr > 5) {
      setCurr(currentTime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime])

  if (words.length === 0) {
    return (
      <Box
        direction="row"
        align="center"
        justify="center"
        gap="medium"
        pad="small"
        background="white"
      >
        <Loading type="bars" color="#008cd5" />
        <Text color="#999">Loading captions</Text>
      </Box>
    )
  }

  return (
    <Box direction="row" gap="small" pad="small" background="white">
      <Text weight="bold">
        {words
          .filter((t) => {
            return t.start >= curr * 1000 - 0 && t.end < curr * 1000 + 5000
          })
          .map((t) => t.text)
          .join(' ')}
      </Text>
    </Box>
  )
}
