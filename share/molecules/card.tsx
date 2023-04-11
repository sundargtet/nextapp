import { Card, CardBody, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Icon from '../atoms/icon'

export default function CardComponent({ data, handleBookmark, handleOpen }: any) {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const onBookmark = (data: any) => {
        setIsBookmarked(prev => !prev)
        handleBookmark(data)
    }
    return (
        <Card maxW='md'>
            <CardBody>
                <Text>
                    {data.content}
                    {
                        isBookmarked ?
                            <Icon type='bookmarked' handleClick={() => onBookmark(data)} /> :
                            <Icon type='bookmark' handleClick={() => onBookmark(data)} />
                    }
                    <Icon type='open' handleClick={() => handleOpen(data)} />
                </Text>
            </CardBody>
        </Card>
    )
}