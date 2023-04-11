import { useEffect } from "react"

export const useInterval = (fn: any, interval: any, dependency?:any) => {
    useEffect(() => {
        fn()
        const intrvl = setInterval(fn, interval)
        return () => {
            clearInterval(intrvl)
        }
    }, [dependency])
}