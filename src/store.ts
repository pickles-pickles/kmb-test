import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSlice from './state-management/slices/appSlice'
import newsSlice from './state-management/slices/newsSlice'

export const store = configureStore({
  reducer: combineReducers({
    app: appSlice,
    news: newsSlice
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
