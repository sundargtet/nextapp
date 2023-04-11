import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import { bookmarkQuotes } from '@/state/atoms'

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
                quotes.map(item => item.content)
            }
        </div>
    )
}