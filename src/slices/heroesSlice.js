import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: initialState,
    reducers: {
        heroesFetching: (state) => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched: (state, action) => {
            state.heroes = action.payload,
            state.heroesLoadingStatus = 'idle'
        },
        heroesFetchingError: (state) => {
            state.heroesLoadingStatus = 'error'
        },
        heroCreate: (state, action) => {
            state.heroes.push(action.payload)
        },
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(hero => hero.id !== action.payload)
        }
    }
})

const { actions, reducer } = heroesSlice

export const { 
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreate,
    heroDeleted
} = actions

export default reducer
