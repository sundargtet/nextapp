import axios from "axios"
import { IQuoteDetails, IParams } from '@/typecheck/interfaces'

export default function QuoteDetails({ quote }: IQuoteDetails) {
    return (
        <div>
            {quote.content}
        </div>
    )
}

export const getServerSideProps = async ({ params }: IParams) => {
    const res = await axios.get(`https://api.quotable.io/quotes/${params.quoteId}`)
    return {
        props: {
            quote: res.data
        }
    }
}