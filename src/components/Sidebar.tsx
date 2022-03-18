import { Box, Button } from 'grommet'
import { Add, Search } from 'grommet-icons'
import { useState } from 'react'
import { Digest, Source } from '../types'
import AddSource from './AddSource'
import Feeds from './Feeds'
import Folders from './Folders'
import Logo from './Logo'

export default function SourceList({
  sources,
  active,
  setActive,
  itemList,
}: {
  sources: Source[]
  active: number
  setActive: (active: number) => void
  itemList: Digest[]
}) {
  const [visible, setVisible] = useState(false)
  return (
    <Box width="200px" background="light-3" style={{ position: 'relative' }}>
      <Box
        height="calc(100vh - 50px)"
        pad={{ top: 'medium', left: 'medium', right: 'small', bottom: '20px' }}
        style={{ overflowY: 'scroll', position: 'relative' }}
      >
        <Box>
          <Logo />
        </Box>
        <Folders />
        <Feeds
          sources={sources}
          itemList={itemList}
          active={active}
          setActive={setActive}
        />
      </Box>

      <Box
        width="100%"
        height="50px"
        pad="small"
        direction="row"
        align="center"
        justify="between"
        background="light-3"
      >
        <Button
          icon={<Add size="16" style={{ cursor: 'pointer' }} />}
          onClick={() => setVisible(true)}
        />
        <Button
          icon={<Search size="16" style={{ cursor: 'pointer' }} />}
          onClick={() => {}}
        />
      </Box>

      {visible && <AddSource onClose={() => setVisible(false)} />}
    </Box>
  )
}
