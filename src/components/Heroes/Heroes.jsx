import { useEffect } from 'react'

import {
    useSelector,
    useDispatch
} from 'react-redux'

import { 
    heroesFetching,
    heroesFetched,
    heroesFetchingError
} from '../../actions/actions'

import useService from '../../services/useService'

import Hero from '../Hero/Hero'

import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

const Heroes = () => {
    const heroes = useSelector(state => state.hero.heroes)
    const heroesLoadingStatus = useSelector(state => state.hero.heroesLoadingStatus)

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
            return <div className='hero__empty'>Героев пока нет</div>
        }

        const items = array.map(({ id, name, description, element }) => {
            return (
                <Hero key={id} id={id} name={name} description={description} element={element}/> //TODO: Разобраться с uuid
            )
        })

        return (
            <ul>
                {items}
            </ul>
        )
    }

    switch (heroesLoadingStatus) {
        case 'loading':
            return <Spinner/>
        case 'error':
            return <Error/>
    }

    const items = renderHeroes(heroes)

    return (
        <section className='heroes'>
            {items}
        </section>
    )
}

export default Heroes
