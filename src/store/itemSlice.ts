import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Digest } from '../types'
import type { RootState } from './index'

interface ItemState {
  list: Digest[]
  starreds: Digest[]
}

const initialState: ItemState = {
  list: [],
  starreds: [],
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
      state.list = state.list.map((item) => {
        if (
          (item.guid && item.guid === action.payload.guid) ||
          (item.link && item.link === action.payload.link)
        ) {
          item.read = true
        }
        return item
      })
    },
    star: (state, action: PayloadAction<Digest>) => {
      state.starreds = [...state.starreds, action.payload]
      state.list = state.list.map((item) => {
        if (item.guid === action.payload.guid) {
          item.starred = !item.starred
        }
        return item
      })
    },
  },
})

export const { append, init, read, star, concat } = itemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.item.list

export default itemSlice.reducer
