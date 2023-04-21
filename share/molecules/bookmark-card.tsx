import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import Icon from '../atoms/icon'

export default function BookmarkCard({ content, author }: { content: string, author: string }) {
    return (
        <Card variant='bookmark'>
            <CardHeader>
                <Icon type='bookmarked'/>
            </CardHeader>
            <CardBody>
                {content}
            </CardBody>
            <CardFooter>
                - {author}
            </CardFooter>
        </Card>
    )
}