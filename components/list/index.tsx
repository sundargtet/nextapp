import { useRef } from "react";
import { NextRouter, useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import Card from '@/share/molecules/quote-card'
import { bookmarkQuotes } from '@/state/atoms'
import { IQuote } from '@/typecheck/interfaces'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

const api = `https://api.quotable.io/quotes?page=`

function App() {
    const router: NextRouter = useRouter()
    const [bookmarkQ, setBookmarkQ] = useRecoilState<IQuote[]>(bookmarkQuotes)
    const loader = useRef(null);
    const { loading, error, list } = useInfiniteScroll(api, loader, 0.5)
    const handleBookmark = (quote: IQuote) => {
        const isAlreadyExist = bookmarkQ.find(item => item._id === quote._id)
        if (isAlreadyExist) {
            setBookmarkQ(bookmarkQ.filter(item => item._id !== quote._id))
        } else {
            setBookmarkQ([...bookmarkQ, quote])
        }
    }
    const handleOpen = (quote: IQuote) => {
        router.push(`/quote/${quote._id}`)
    }
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {list.map((item: IQuote, index: number) =>
                    <Card key={index} data={item} handleBookmark={handleBookmark} handleOpen={handleOpen} />
                )}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
        </>
    );
}

export default App;
