import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Feed } from '../types'
import type { RootState } from './index'
import { EXAMPLE_FEEDS } from './constants'
import { removeFeed, updateFeed } from '../utils/storage'

interface FeedState {
  list: Feed[]
}

const initialState: FeedState = {
  list: EXAMPLE_FEEDS,
}

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Feed>) => {
      state.list = [...state.list, action.payload]
    },
    init: (state, action: PayloadAction<Feed[]>) => {
      state.list = action.payload
    },
    remove: (state, action: PayloadAction<Feed>) => {
      state.list = state.list.filter((feed) => feed.id !== action.payload.id)
      removeFeed(action.payload)
    },
    update: (state, action: PayloadAction<Feed>) => {
      state.list = state.list.map((feed) => {
        if (feed.id !== action.payload.id) {
          return feed
        }
        return action.payload
      })
      updateFeed(action.payload)
    },
  },
})

export const { append, init, remove } = feedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectfeed = (state: RootState) => state.feed.list

export default feedSlice.reducer
