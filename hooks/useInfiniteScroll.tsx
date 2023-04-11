import { useState, useCallback } from 'react'
import { useScroll } from './useScroll'
import { useIntersectionObserver } from './useIntersectionObserver'

export const useInfiniteScroll = (api: any, ref: any, count: any) => {
    const [page, setPage] = useState(1)
    const { loading, error, list } = useScroll(api, page)
    const handleObserver = useCallback((entries: any[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + count);
        }
    }, []);
    useIntersectionObserver(handleObserver, ref)
    return { loading, error, list }
}