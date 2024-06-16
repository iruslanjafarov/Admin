const initialState = {
    heroes: [],
    filters: [],
    heroesLoadingStatus: 'idle',
    filtersLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Heroes

        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            const newHero = state.heroes.filter(hero => hero.id !== action.payload) 

            return {
                ...state,
                heroes: newHero
            }
        case 'HERO_CREATED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        //Filters
        
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        default:
            return state
    }
}

export default reducer
