import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Digest } from '../types'
import type { RootState } from './index'
import { excludeItem, isContained } from '../utils/format'

interface ItemState {
  list: Digest[]
  starreds: Digest[]
  vieweds: Digest[]
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
    append: (state, action: PayloadAction<Digest>) => {
      state.list = [...state.list, action.payload]
    },
    concat: (state, action: PayloadAction<Digest[]>) => {
      state.list = [...state.list, ...action.payload]
    },
    init: (state, action: PayloadAction<Digest[]>) => {
      state.list = action.payload
    },
    read: (state, action: PayloadAction<Digest>) => {
      state.vieweds = [...state.vieweds, action.payload]
    },
    readAll: (state, action: PayloadAction<Digest[]>) => {
      state.vieweds = [...state.vieweds, ...action.payload]
    },
    star: (state, action: PayloadAction<Digest>) => {
      if (isContained(action.payload, state.starreds)) {
        state.starreds = excludeItem(action.payload, state.starreds)
      } else {
        state.starreds = [...state.starreds, action.payload]
      }
    },
  },
})

export const { append, init, read, star, concat, readAll } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.item.list

export default itemSlice.reducer
