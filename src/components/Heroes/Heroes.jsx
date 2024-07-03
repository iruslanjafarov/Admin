import { useEffect } from 'react'

import { 
    useSelector,
    useDispatch
} from 'react-redux'

import { 
    heroesFetch, 
    filteredHeroesSelector 
} from '../../slices/heroesSlice'

import Hero from '../hero/hero'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

const Heroes = () => {
    const filteredHeroes = useSelector(filteredHeroesSelector)

    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(heroesFetch())
    }, [])

    const renderHeroes = (array) => {
        if (array.length === 0) {
            return <div className='hero__empty'>Героев пока нет</div>
        }

        const items = array.map(({ id, name, description, element }) => {
            return (
                <Hero
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    element={element}
                />
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

    const items = renderHeroes(filteredHeroes)

    return (
        <section className='heroes'>
            {items}
        </section>
    )
}

export default Heroes
