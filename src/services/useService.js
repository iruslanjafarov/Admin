import useHttp from '../hooks/http.hook'

const useService = () => {
    const { request } = useHttp()

    const getAllHeroes = () => request('https://calm-torch-quality.glitch.me/heroes')

    const getAllFilters = () => request('https://calm-torch-quality.glitch.me/filters')

    const deleteHero = (id) => request(`https://calm-torch-quality.glitch.me/heroes/${id}`, 'DELETE')

    const createHero = (hero) => request('https://calm-torch-quality.glitch.me/heroes', 'POST', hero)

    return { 
        getAllHeroes,
        getAllFilters,
        deleteHero,
        createHero
    }
}

export default useService