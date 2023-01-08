import { configureStore } from '@reduxjs/toolkit'
import formationSlice from './reducers/formation'
export const store = configureStore({
  reducer: {formation:formationSlice.reducer},
})