import { configureStore } from '@reduxjs/toolkit'
import sourceReducer from './sourceSlice'
import itemReducer from './itemSlice'

const store = configureStore({
  reducer: {
    source: sourceReducer,
    item: itemReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
