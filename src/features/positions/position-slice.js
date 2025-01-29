import {createSlice} from '@reduxjs/toolkit'

export const positionSlice = createSlice({
    name: "@@postion",
    initialState: [],
    reducers: {
        addPositions: (_, action)=> action.payload
    }
})

export const {addPositions} = positionSlice.actions
export const positionReducer = positionSlice.reducer

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, ...pos.languages, pos.level, ...pos.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}