import { ErrorBoundary } from 'react-error-boundary'

import HeroesForm from '../heroesForm/heroesForm'
import HeroesFilters from '../heroesFilters/heroesFilters'

const HeroesSearch = () => {
    return (
        <section className='search'>
            <ErrorBoundary fallback={null}>
                <HeroesForm/>
            </ErrorBoundary>
            <ErrorBoundary fallback={null}>
                <HeroesFilters/>
            </ErrorBoundary>
        </section>
    )
}

export default HeroesSearch
