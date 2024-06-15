import HeroesForm from '../HeroesForm/HeroesForm'
import HeroesFilters from '../HeroesFilters/HeroesFilters'

const HeroesSearch = () => {
    return (
        <section className='search'>
            <HeroesForm/>
            <HeroesFilters/>
        </section>
    )
}

export default HeroesSearch
