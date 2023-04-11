import axios, { AxiosResponse } from 'axios'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import BannerWall from '@/share/organisms/banner'
import { IQuote } from '@/typecheck/interfaces'
import {useInterval} from '@/hooks'
import { Box, Progress } from '@chakra-ui/react'

export default function Banner() {
    const router: NextRouter = useRouter()
    const [quote, setQuote] = useState<IQuote | {}>({})
    const { _id, content } = { ...quote }
    const getRandomQuote = async () => {
        const res: AxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}random`)
        setQuote(res.data)
    }
    useInterval(getRandomQuote, 15000)
    const handleDetails = () => {
        router.push(`/quote/${_id}`)
    }
    
    return (
        <Box mb={4}>
            <BannerWall quote={content} handleDetails={handleDetails} />
        </Box>)
}