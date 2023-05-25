import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from '../components/Cursor/cursorSlice'
// import newsletterSlice from '../components/NewsLetterInput/NewsLetterSlice'

export default configureStore({
    reducer: {
        cursor: cursorSlice,
        // newsletter:newsletterSlice,
    },
})