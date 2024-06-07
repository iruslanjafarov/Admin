import { useState, useEffect } from 'react'

import useService from '../../services/useService'

import Hero from '../Hero/Hero'

const Heroes = () => {
    const [heroes, setHeroes] = useState([])

    const { getAllHeroes } = useService()

    useEffect(() => {
        heroesLoaded()
    }, [])

    const heroesLoaded = () => {
        getAllHeroes().then(hero => setHeroes(hero))
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

    const items = renderHeroes(heroes);

    return (
        <section className='heroes'>
            <ul>
                {items}
            </ul>
        </section>
    )
}

export default Heroes