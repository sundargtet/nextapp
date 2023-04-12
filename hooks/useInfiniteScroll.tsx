import { useState, useCallback, MutableRefObject } from 'react'
import { useScroll } from './useScroll'
import { useIntersectionObserver } from './useIntersectionObserver'

export const useInfiniteScroll = (api: string, ref: MutableRefObject<null>, count: number) => {
    const [page, setPage] = useState<number>(1)
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