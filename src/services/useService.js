import useHttp from '../hooks/http.hook'

const useService = () => {
    const _apiLinkHeroes = 'https://calm-torch-quality.glitch.me/heroes'
    const _apiLinkFilters = 'https://calm-torch-quality.glitch.me/filters'

    const { request } = useHttp()

    const getAllHeroes = () => request(_apiLinkHeroes)

    const getAllFilters = () => request(_apiLinkFilters)

    const deleteHero = (id) => request(`${_apiLinkHeroes}/${id}`, 'DELETE')

    const createHero = (hero) => request(_apiLinkHeroes, 'POST', hero)

    return { 
        getAllHeroes,
        getAllFilters,
        deleteHero,
        createHero
    }
}

export default useService
