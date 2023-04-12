import { Card } from "@chakra-ui/react";
import { TBanner } from '@/typecheck/types'

export default function Banner({ quote, handleDetails }: TBanner) {

    return (
        <Card
            height='150px'
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            // variant='filled'
            cursor={'pointer'}
            onClick={handleDetails}
            variant='banner'
        >
            {quote}
        </Card>
    )
}