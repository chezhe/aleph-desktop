import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Episode } from '../types'
import type { RootState } from './index'
import { excludeItem, getEpisodeId, isContained } from '../utils/format'
import { setValue } from '../utils/storage'
import _ from 'lodash'

interface ItemState {
  list: Episode[]
  starreds: Episode[]
  vieweds: string[]
}

const initialState: ItemState = {
  list: [],
  starreds: [],
  vieweds: [],
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Episode>) => {
      state.list = [...state.list, action.payload]
    },
    concat: (state, action: PayloadAction<Episode[]>) => {
      state.list = _.uniqBy(
        [...state.list, ...action.payload],
        (t) => t.guid || t.link
      )
    },
    init: (state, action: PayloadAction<Episode[]>) => {
      state.list = _.uniqBy(
        [...state.list, ...action.payload],
        (t) => t.guid || t.link
      )
    },
    read: (state, action: PayloadAction<Episode>) => {
      state.vieweds = _.uniq([
        ...state.vieweds,
        action.payload.guid || action.payload.link,
      ])
      setValue('itemvieweds', JSON.stringify(state.vieweds))
    },
    readAll: (state, action: PayloadAction<Episode[]>) => {
      state.vieweds = _.uniq([
        ...state.vieweds,
        ...action.payload.map(getEpisodeId),
      ])
      setValue('itemvieweds', JSON.stringify(state.vieweds))
    },
    star: (state, action: PayloadAction<Episode>) => {
      if (isContained(action.payload, state.starreds)) {
        state.starreds = excludeItem(action.payload, state.starreds)
      } else {
        state.starreds = [...state.starreds, action.payload]
      }
      setValue('itemstarreds', JSON.stringify(state.starreds))
    },
    starAll: (state, action: PayloadAction<Episode[]>) => {
      state.starreds = _.uniqBy(
        [...state.starreds, ...action.payload],
        (t) => t.guid || t.link
      )
    },
  },
})

export const { append, init, read, star, concat, readAll, starAll } =
  itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.item.list

export default itemSlice.reducer
