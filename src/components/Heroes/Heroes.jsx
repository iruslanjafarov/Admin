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
        const heroes = array.map(({ id, name, description, element }, i) => {
            if (i == 0) {
                return <Hero key={id} name={name} description={description} element={element} firstElement={true}/>
            }
            
            return <Hero key={id} name={name} description={description} element={element}/>
        })

        return heroes
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