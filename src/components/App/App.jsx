import { Provider } from 'react-redux'

import { ErrorBoundary } from 'react-error-boundary'

import store from '../../store/store'

import Heroes from '../heroes/heroes'
import HeroesSearch from '../heroesSearch/heroesSearch'

const App = () => {
    return (
        <Provider store={store}>
            <main>
                <ErrorBoundary fallback={null}>
                    <Heroes/>
                </ErrorBoundary>
                <ErrorBoundary fallback={null}>
                    <HeroesSearch/>
                </ErrorBoundary>
            </main>
        </Provider>
    )
}

export default App
