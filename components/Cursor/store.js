import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursorSlice'

export default configureStore({
    reducer: {
        cursor: cursorSlice,
    },
})