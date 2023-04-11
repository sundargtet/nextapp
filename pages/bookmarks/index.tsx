import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import { Card } from '@chakra-ui/react'
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
                quotes.map(item => <Card boxShadow={'2px 2px 4px #cecece'} mb={4} p={4}>{item.content}</Card>)
            }
        </div>
    )
}