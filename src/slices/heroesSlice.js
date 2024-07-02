import { 
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import http from '../services/http'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesFetch = createAsyncThunk(
    'heroes/heroesFetch',
    () => {
        const { request } = http()
        
        return request(import.meta.env.VITE_LINK_HEROES)
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: initialState,
    reducers: {
        heroCreate: (state, action) => {
            state.heroes.push(action.payload)
        },
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(hero => hero.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(heroesFetch.pending, (state) => { state.heroesLoadingStatus = 'loading' })
            .addCase(heroesFetch.fulfilled, (state, action) => { state.heroes = action.payload, state.heroesLoadingStatus = 'idle' })
            .addCase(heroesFetch.rejected, (state) => { state.heroesLoadingStatus = 'error' })
            .addDefaultCase(() => {})
    }
})

const { actions, reducer } = heroesSlice

export const {
    heroCreate,
    heroDeleted
} = actions

export { heroesFetch }

export default reducer
