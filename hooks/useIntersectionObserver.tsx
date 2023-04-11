import { useEffect } from "react"

export const useIntersectionObserver = (fn: any, loaderRef: any) => {
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(fn, option);
        if (loaderRef!.current) observer.observe(loaderRef!.current);
    }, [fn])
}

//fn => handleObserver