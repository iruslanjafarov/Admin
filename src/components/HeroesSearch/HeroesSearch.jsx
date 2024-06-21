import { ErrorBoundary } from 'react-error-boundary'

import HeroesForm from '../HeroesForm/HeroesForm'
import HeroesFilters from '../HeroesFilters/HeroesFilters'

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
