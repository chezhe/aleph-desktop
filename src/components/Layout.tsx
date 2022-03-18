import dayjs from 'dayjs'
import { XMLParser } from 'fast-xml-parser'
import { Box, Grommet, grommet } from 'grommet'
import { useEffect, useState } from 'react'
import { Channel, Digest, Source, SourceType } from '../types'
import ContentList from './ContentList'
import Reader from './Reader'
import Sidebar from './Sidebar'
// import TitleBar from './TitleBar'

const sources = [
  {
    name: '八分',
    url: 'https://api.vistopia.com.cn/rss/program/11.xml',
    type: SourceType.RSS,
  },
  {
    name: 'sspai',
    url: 'https://sspai.com/feed',
    type: SourceType.RSS,
  },
  {
    name: '一天世界',
    url: 'http://yitianshijie.net/feed/audio.xml',
    type: SourceType.RSS,
  },
  {
    name: '卫报',
    url: 'https://www.theguardian.com/international/rss',
    type: SourceType.RSS,
  },
  {
    name: 'NYTimes',
    url: 'https://cn.nytimes.com/rss/',
    type: SourceType.RSS,
  },
  {
    name: 'Is It Serious?',
    url: 'https://rss.art19.com/am-i-dying',
    type: SourceType.PODCAST,
  },
  {
    name: '文化有限',
    url: 'https://s1.proxy.wavpub.com/weknownothing.xml',
    type: SourceType.PODCAST,
  },
  {
    name: '声东击西',
    url: 'https://feeds.fireside.fm/shengdongjixi/rss',
    type: SourceType.PODCAST,
  },
  {
    name: '故事 FM',
    url: 'https://storyfm.cn/feed/episodes',
    type: SourceType.PODCAST,
  },
  {
    name: '姜思达',
    url: 'https://feed.xyzfm.space/tdjvf7vfnbqq',
    type: SourceType.PODCAST,
  },
  {
    name: '高效磨耳朵',
    url: 'http://www.ximalaya.com/album/46602128.xml',
    type: SourceType.PODCAST,
  },
  {
    name: '凹凸电波',
    url: 'http://www.ximalaya.com/album/19206382.xml',
    type: SourceType.PODCAST,
  },
  {
    name: '来都来了',
    url: 'http://www.ximalaya.com/album/31677988.xml',
    type: SourceType.PODCAST,
  },
  {
    name: '无聊斋',
    url: 'http://www.ximalaya.com/album/14302859.xml',
    type: SourceType.PODCAST,
  },
  {
    name: '不合时宜',
    url: 'https://feed.xyzfm.space/ww7cqnybekty',
    type: SourceType.PODCAST,
  },
]

function fetchFeed(source: Source) {
  console.log(source)
  return fetch(`https://cors-anywhere.herokuapp.com/${source.url}`)
    .then((response) => response.text())
    .then((data) => {
      const parser = new XMLParser()
      const jObj = parser.parse(data)
      console.log(jObj)
      return jObj.rss?.channel
    })
    .catch(console.log)
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [active, setActive] = useState(0)
  const [channel, setChannel] = useState<Channel>()
  const [activeItem, setActiveItem] = useState<Digest | undefined>()
  // const [activeContent, setActiveContent] = useState<string>()
  useEffect(() => {
    if (sources[active]) {
      fetchFeed(sources[active]).then((_channel) =>
        setChannel({
          ..._channel,
          item: _channel.item.sort(
            (a: Digest, b: Digest) =>
              dayjs(b.pubDate).unix() - dayjs(a.pubDate).unix()
          ),
        })
      )
    }
  }, [active])

  return (
    <Grommet theme={grommet}>
      {/* <TitleBar /> */}
      <Box direction="row" width="100%">
        <Sidebar
          sources={sources}
          active={active}
          setActive={(idx) => {
            setActive(idx)
            setChannel(undefined)
            setActiveItem(undefined)
          }}
        />
        <ContentList
          channel={channel}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <Reader activeItem={activeItem} />
      </Box>
    </Grommet>
  )
}
