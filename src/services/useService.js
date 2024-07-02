import useHttp from './http'

const useService = () => {
    const _apiLinkHeroes = import.meta.env.VITE_LINK_HEROES

    const { request } = useHttp()

    const createHero = (hero) => request(_apiLinkHeroes, 'POST', hero)
    const deleteHero = (id) => request(`${_apiLinkHeroes}/${id}`, 'DELETE')

    return {
        createHero,
        deleteHero
    }
}

export default useService
