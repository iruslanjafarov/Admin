export const heroesFetching = () => ({ type: 'HEROES_FETCHING' })
export const heroesFetchingError = () => ({ type: 'HEROES_FETCHING_ERROR' })
export const filtersFetching = () => ({ type: 'FILTERS_FETCHING' })
export const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' })

export const heroesFetched = (heroes) => { 
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const heroCreate = (hero) => {
    return {
        type: 'HERO_CREATED',
        payload: hero
    }
}

export const filtersFetched = (filters) => { 
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
