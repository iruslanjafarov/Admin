import useHttp from '../hooks/http.hook'

const useService = () => {
    const { request } = useHttp()

    const getAllHeroes = () => request('https://calm-torch-quality.glitch.me/heroes')

    const getAllFilters = () => request('https://calm-torch-quality.glitch.me/filters')

    const deleteHeroes = (id) => request(`https://calm-torch-quality.glitch.me/heroes/${id}`, 'DELETE')

    return { 
        getAllHeroes,
        getAllFilters,
        deleteHeroes
    }
}

export default useService