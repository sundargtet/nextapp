import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function AuthorsCard({ author, handleAuthor }: any) {
    return (
        <Box
            border='1px solid #cecece'
            boxShadow='2px 2px 4px 1px #cecece'
            p={4}
            borderRadius={4}
            onClick={() => handleAuthor(author.slug)}
        >
            <Box fontWeight='bold'>{author.name} </Box>
            <hr />
            {author.bio}
            <br />
            <Box textAlign='right'>
                <Link href={author.link}>
                    <Button variant='links'>more</Button>
                </Link>
            </Box>
        </Box>
    )
}