import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Source } from '../types'
import type { RootState } from './index'
import { EXAMPLE_FEEDS } from './constants'
import { removeFeed } from '../utils/storage'

interface SourceState {
  list: Source[]
}

const initialState: SourceState = {
  list: EXAMPLE_FEEDS,
  // list: [],
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
      removeFeed(action.payload)
    },
  },
})

export const { append, init, remove } = sourceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.source.list

export default sourceSlice.reducer
