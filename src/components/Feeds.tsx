import { Box, Button, Heading, Text } from 'grommet'
import { Down, Next } from 'grommet-icons'
import { useState } from 'react'
import { Source } from '../types'

export default function Feeds({
  sources,
  active,
  setActive,
}: {
  sources: Source[]
  active: number
  setActive: (active: number) => void
}) {
  const [fold, setFold] = useState(false)
  return (
    <Box>
      <Box direction="row" align="end" justify="between">
        <Heading level={3} margin={{ bottom: 'xsmall' }}>
          Feeds
        </Heading>

        <Button
          size="small"
          icon={fold ? <Next size="small" /> : <Down size="small" />}
          onClick={() => setFold(!fold)}
        />
      </Box>

      {!fold && (
        <Box pad={{ left: 'small' }}>
          {sources.map((source, idx) => (
            <Box
              key={source.name}
              pad="xxsmall"
              background={active === idx ? 'light-6' : ''}
              onClick={() => setActive(idx)}
              style={{ boxShadow: 'none', borderRadius: 4, minHeight: 'unset' }}
            >
              <Text size="small">{source.name}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
