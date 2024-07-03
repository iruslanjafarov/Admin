import { 
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_LINK_DEFAULT }),
    tagTypes: ['Heroes'],
    endpoints: (builder) => ({
        getAllHeroes: builder.query({ query: () => 'heroes', providesTags: ['Heroes'] }),
        heroCreate: builder.mutation({ query: (hero) => ({ url: 'heroes', method: 'POST', body: hero }), invalidatesTags: ['Heroes']}),
        heroDelete: builder.mutation({ query: (id) => ({ url: `heroes/${id}`, method: 'DELETE' }), invalidatesTags: ['Heroes']})
    })
})

export const {
    reducerPath,
    reducer,
    middleware,
    useGetAllHeroesQuery,
    useHeroCreateMutation,
    useHeroDeleteMutation
} = apiSlice
