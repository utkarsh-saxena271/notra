import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './reducers/userSlice'
import  noteSlice  from './reducers/noteSlice'

export const store = configureStore({
  reducer: {
    user : userSlice,
    note : noteSlice
  },
})
