import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
// import { State, Track } from 'react-native-track-player'
import { Feed } from '@/types'

interface FeedSlice {
  explore: { title: string; items: Feed[] }[]
  // playlist: Track[]
}

const initialState: FeedSlice = {
  explore: [],
  // playlist: [],
}

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setExplore: (state, action) => {
      state.explore = action.payload
    },
  },
})

export const {} = feedSlice.actions

export default feedSlice.reducer
