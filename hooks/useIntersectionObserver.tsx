import { MutableRefObject, useEffect } from "react"

interface IOption {
    root: null;
    rootMargin: string;
    threshold: number;
}

export const useIntersectionObserver = (fn: (entries: any[]) => void, loaderRef: MutableRefObject<null>) => {
    useEffect(() => {
        const option: IOption = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(fn, option);
        if (loaderRef!.current) observer.observe(loaderRef!.current);
    }, [fn])
}

//fn => handleObserver