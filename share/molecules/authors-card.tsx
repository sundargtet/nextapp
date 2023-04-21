import { Button, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import Link from "next/link";
import { TAuthorCard } from '@/typecheck/types'

export default function AuthorsCard({ author, handleAuthor }: TAuthorCard) {
    return (
        <Card
            variant='author'
            onClick={() => handleAuthor(author.slug)}
        >
            <CardHeader>
                {author.name}
            </CardHeader>
            <CardBody>
                {author.bio}
            </CardBody>
            <CardFooter>
                <Link href={author.link}>
                    <Button variant='links'>more</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}