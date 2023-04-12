import { Card, CardBody, CardFooter, Text } from '@chakra-ui/react'
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
        <Card w='md' h={200} style={{ marginBottom: '8px' }}>
            <CardBody>
                <Text>
                    {data.content}
                </Text>
            </CardBody>
            <CardFooter textAlign={'right'} display='flex' justifyContent='flex-end' padding={0}>
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