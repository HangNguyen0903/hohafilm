import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../context/auth/slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const rootState = store.getState()
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch