import useHttp from '../hooks/http.hook'

const useService = () => {
    const _apiLinkHeroes = 'https://calm-torch-quality.glitch.me/heroes'
    const _apiLinkFilters = 'https://calm-torch-quality.glitch.me/filters'

    const { request } = useHttp()

    const getAllHeroes = () => request(_apiLinkHeroes)

    const getAllFilters = () => request(_apiLinkFilters)

    const createHero = (hero) => request(_apiLinkHeroes, 'POST', hero)

    const deleteHero = (id) => request(`${_apiLinkHeroes}/${id}`, 'DELETE')

    return { 
        getAllHeroes,
        getAllFilters,
        createHero,
        deleteHero
    }
}

export default useService
