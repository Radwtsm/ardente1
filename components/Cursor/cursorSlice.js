import { createSlice } from '@reduxjs/toolkit'

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState: {
        value: 'default',
    },
    reducers: {
        isDefault: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = 'default'
        },
        isLink: (state) => {
            state.value = 'link'
        },
        isProject: (state) => {
            state.value = 'project'
        },
        isHidden: (state) => {
            state.value = 'hidden'
        },
        //   incrementByAmount: (state, action) => {
        //     state.value += action.payload
        //   },
    },
})

// Action creators are generated for each case reducer function
export const { isDefault, isLink, isProject } = cursorSlice.actions

export default cursorSlice.reducer