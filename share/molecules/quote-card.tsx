import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from 'react'
import Icon from '../atoms/icon'
import { IQuote } from '@/typecheck/interfaces'
import { TCard } from '@/typecheck/types'
export default function CardComponent({ data, handleBookmark, handleOpen }: TCard) {
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
    const onBookmark = (data: IQuote) => {
        setIsBookmarked(prev => !prev)
        handleBookmark(data)
    }
    return (
        <Card variant='quote'>
            <CardBody>
                {data.content}
            </CardBody>
            <CardFooter>
                {
                    isBookmarked ?
                        <Icon type='bookmarked' handleClick={() => onBookmark(data)} /> :
                        <Icon type='bookmark' handleClick={() => onBookmark(data)} />
                }
                <Icon type='open' handleClick={() => handleOpen(data)} />
            </CardFooter>
        </Card>
    )
}