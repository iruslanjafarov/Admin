import useHttp from '../hooks/http.hook';

const useService = () => {
    const { request } = useHttp()

    const getAllHeroes = () => {
        const heroes = request('https://calm-torch-quality.glitch.me/heroes')
        
        return heroes
    }

    const getAllFilters = () => {
        const filters = request('https://calm-torch-quality.glitch.me/filters')
        
        return filters
    }

    return { 
        getAllHeroes,
        getAllFilters
    }
}

export default useService