import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Source, SourceType } from '../types'
import type { RootState } from './index'

interface SourceState {
  list: Source[]
}

const initialState: SourceState = {
  list: [
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
      name: 'Steve说',
      url: 'https://feeds.fireside.fm/steve/rss',
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
  ],
}

export const sourceSlice = createSlice({
  name: 'source',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Source>) => {
      state.list = [...state.list, action.payload]
    },
    init: (state, action: PayloadAction<Source[]>) => {
      state.list = action.payload
    },
    remove: (state, action: PayloadAction<Source>) => {
      state.list = state.list.filter(
        (source) => source.name !== action.payload.name
      )
    },
  },
})

export const { append, init, remove } = sourceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.source.list

export default sourceSlice.reducer
