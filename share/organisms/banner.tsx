import { Box, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
// import { TBanner } from '@/typecheck/types'
import { TBanner } from '../../typecheck/types'

interface IBanner {
    /**
     * any string
     */
    quote: string | undefined;
    /**
     * any string
     */
    author: string | undefined;
    handleDetails: () => void;
}

export default function Banner({ quote, author, handleDetails }: IBanner) {
    return (
        <Card
            onClick={handleDetails}
            variant='banner'
        >
            <main>
                {quote}
            </main>
            <footer>
                {author}
            </footer>
        </Card>
    )
}