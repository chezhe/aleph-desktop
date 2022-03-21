import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Episode, Feed } from '../types'
import type { RootState } from './index'
import _ from 'lodash'
import {
  createEpisode,
  readEpisode,
  starEpisode,
  readEpisodeByFeedId,
} from '../utils/storage'

interface EpisodeState {
  list: Episode[]
}

const initialState: EpisodeState = {
  list: [],
}

export const itemSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Episode>) => {
      state.list = [...state.list, action.payload]
    },
    concat: (state, action: PayloadAction<Episode[]>) => {
      const diffMore = _.differenceBy(action.payload, state.list, (t) => t.link)
      state.list = _.uniqBy([...state.list, ...action.payload], (t) => t.link)

      diffMore.forEach((t) => {
        createEpisode(t)
      })
    },
    init: (state, action: PayloadAction<Episode[]>) => {
      state.list = _.uniqBy([...state.list, ...action.payload], (t) => t.link)
    },
    read: (state, action: PayloadAction<Episode>) => {
      state.list = state.list.map((t) => {
        if (t.link === action.payload.link) {
          return { ...t, readed: true }
        }
        return t
      })
      readEpisode(action.payload)
    },
    readAll: (state, action: PayloadAction<Feed>) => {
      state.list = state.list.map((t) => {
        if (t.feedid === action.payload.id) {
          return { ...t, readed: true }
        }
        return t
      })
      readEpisodeByFeedId(action.payload)
    },
    star: (state, action: PayloadAction<Episode>) => {
      state.list = state.list.map((t) => {
        if (t.link === action.payload.link) {
          starEpisode(action.payload, !t.starred)
          return { ...t, starred: !t.starred }
        }
        return t
      })
    },
  },
})

export const { append, init, read, star, concat, readAll } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFeed = (state: RootState) => state.episode.list

export default itemSlice.reducer
