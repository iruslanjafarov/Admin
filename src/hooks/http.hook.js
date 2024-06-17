import { useCallback } from 'react'

const useHttp = () => {
    const request = useCallback(async (url, method, body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers})

            if (!response.ok) {
                throw new Error(`Have error with fetch, status: ${response.status}`)
            }
            
            const data = await response.json()

            return data
        } catch (error) {
            throw new Error(error)
        }
    }, [])

    return { request }
}

export default useHttp