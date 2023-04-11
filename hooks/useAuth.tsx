import { useEffect, useState } from "react"

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<null | string | undefined>(undefined)
    useEffect(() => {
        if (window !== undefined) {
            const isAuth: null | string | undefined = window.localStorage.getItem('token')
            setIsAuthenticated(isAuth)
        }
    }, [])
    return isAuthenticated
}