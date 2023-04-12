import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useScroll = (api: string, page: number) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | string>(false);
    const [list, setList] = useState<any[]>([]);

    const sendQuery: () => Promise<void> = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await axios.get(
                `${api}${page}`
            );
            const { results }: any = { ...res.data }
            setList((prev: any[]) => [...prev, ...results])
            setLoading(false);
        } catch (err) {
            setError('something went wrong');
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, page]);

    return { loading, error, list };
}
