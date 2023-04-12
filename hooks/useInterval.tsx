import { useEffect } from "react"

export const useInterval = (fn: () => void, interval: number = 0.5, dependency?: string) => {
    useEffect(() => {
        fn()
        const intrvl = setInterval(fn, interval)
        return () => {
            clearInterval(intrvl)
        }
    }, [dependency])
}