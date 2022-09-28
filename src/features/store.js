import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './slice/taskSlice'
export const store = configureStore({
     reducer: {
          Tasks: TaskSlice,
     },
})