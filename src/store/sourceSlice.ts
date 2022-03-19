import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Source } from '../types'
import type { RootState } from './index'
import { setValue } from '../utils/storage'
import { EXAMPLE_FEEDS } from './constants'

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
      setValue('source', JSON.stringify(state.list))
    },
    init: (state, action: PayloadAction<Source[]>) => {
      state.list = action.payload
      setValue('source', JSON.stringify(state.list))
    },
    remove: (state, action: PayloadAction<Source>) => {
      state.list = state.list.filter(
        (source) => source.name !== action.payload.name
      )
      setValue('source', JSON.stringify(state.list))
    },
  },
})

export const { append, init, remove } = sourceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSource = (state: RootState) => state.source.list

export default sourceSlice.reducer
