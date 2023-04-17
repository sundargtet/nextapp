import { Box, Card, Stack } from "@chakra-ui/react";
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
            height='150px'
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            cursor={'pointer'}
            onClick={handleDetails}
            variant='banner'
        >
            <div>
                {quote}
            </div>
            <div>
                -{author}
            </div>
        </Card>
    )
}