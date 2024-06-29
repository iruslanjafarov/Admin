import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    filterActive: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        filtersFetching: (state) => {
            state.filtersLoadingStatus = 'loading'
        },
        filtersFetched: (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        },
        filtersFetchingError: (state) => {
            state.filtersLoadingStatus = 'error'
        },
        filterActive: (state, action) => {
            state.filterActive = action.payload
        }
    }
})

const { actions, reducer } = filtersSlice

export const { 
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterActive
} = actions

export default reducer
