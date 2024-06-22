import { createAction } from '@reduxjs/toolkit'

export const heroesFetching = createAction('HEROES_FETCHING')
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')
export const heroesFetched = createAction('HEROES_FETCHED')
export const heroDeleted = createAction('HERO_DELETED')
export const heroCreate = createAction('HERO_CREATED')
