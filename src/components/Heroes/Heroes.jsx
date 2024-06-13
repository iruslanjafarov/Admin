import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { heroesFetching, heroesFetched, heroesFetchingError } from '../../actions/actions'

import useService from '../../services/useService'

import Hero from '../Hero/Hero'

import Spinner from '../Spinner/Spinner'

const Heroes = () => {
    const heroes = useSelector(state => state.heroes)
    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus)

    const dispatch = useDispatch()

    const { getAllHeroes } = useService()

    useEffect(() => {
        dispatch(heroesFetching())
        heroesLoading()
    }, [])

    const heroesLoading = () => {
        getAllHeroes()
        .then(hero => dispatch(heroesFetched(hero)))
        .catch(() => dispatch(heroesFetchingError()))
    }

    const renderHeroes = (array) => {
        if (array.length === 0) {
            return <h5>Нет персонажей!</h5>
        }

        return array.map(({ id, name, description, element }) => {
            return <Hero key={id} name={name} description={description} element={element}/>
        })
    }

    if (heroesLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (heroes === 'error') {
        console.log('error')
    }

    const items = renderHeroes(heroes)

    return (
        <section className='heroes'>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Heroes