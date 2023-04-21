import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import { bookmarkQuotes } from '@/state/atoms'
import BookmarkCard from '@/share/molecules/bookmark-card'

export default function BookmarkList() {
    const router = useRouter()
    const quotes = useRecoilValue(bookmarkQuotes)
    useEffect(() => {
        if (!quotes.length) {
            router.push('/')
        }
    }, [])
    return (
        <div>
            {
                quotes.map((item) =>
                    <BookmarkCard key={item._id} content={item.content} author={item.author}/>
                )

            }
        </div>
    )
}