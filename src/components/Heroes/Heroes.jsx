import { useMemo } from 'react'

import { useSelector } from 'react-redux'

import { useGetAllHeroesQuery } from '../../slices/apiSlice'

import Hero from '../hero/hero'

import Spinner from '../spinner/spinner'
import Error from '../error/error'

const Heroes = () => {
    const {
        data: heroes = [],
        isLoading,
        isError
    } = useGetAllHeroesQuery()

    const filterActive = useSelector(state => state.filters.filterActive)

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice()

        if (filterActive === 'all') {
            return filteredHeroes
        }

        return filteredHeroes.filter(hero => hero.element === filterActive)
    }, [heroes, filterActive])

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

    if (isLoading) {
        return <Spinner/>
    } else if (isError) {
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
