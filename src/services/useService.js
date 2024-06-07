import useHttp from '../hooks/http.hook';

const useService = () => {
    const { request } = useHttp()

    const getAllHeroes = () => {
        const heroes = request('https://calm-torch-quality.glitch.me/heroes')
        
        return heroes
    }

    return { getAllHeroes }
}

export default useService