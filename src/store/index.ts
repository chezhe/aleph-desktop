import { configureStore } from '@reduxjs/toolkit'
import feedReducer from './feedSlice'
import episodeReducer from './episodeSlice'

const store = configureStore({
  reducer: {
    feed: feedReducer,
    episode: episodeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
