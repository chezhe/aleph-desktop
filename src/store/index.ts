import { configureStore } from '@reduxjs/toolkit'
import feedSlice from './feedSlice'
import settingSlice from './settingSlice'

export const store = configureStore({
  reducer: {
    feed: feedSlice,
    setting: settingSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
