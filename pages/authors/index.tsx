import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AuthorsCard from "@/share/molecules/authors-card"
import { Stack } from "@chakra-ui/react"

export default function Authors({ authors }: any) {
    const [authorsList, setAuthorsList] = useState(authors)
    const router = useRouter()

    const handleAuthor = async (author: string) => {
        const res = await axios.get(`https://api.quotable.io/authors?slug=${author}`)
        const { results } = await res.data
        setAuthorsList(results)
        router.push(`/authors?slug=${author}`, undefined, { shallow: true })
    }
    
    useEffect(()=>{
        setAuthorsList(authors)
    },[authors])

    return (
        <Stack spacing={4} p={4}>
            {
                authorsList.map((author: any) =>
                    <AuthorsCard
                        key={author._id}
                        author={author}
                        handleAuthor={handleAuthor}
                    />

                )
            }
        </Stack>
    )
}

export const getServerSideProps = async ({ query }: any) => {
    const { slug } = query
    const queryString = slug ? `slug=${slug}` : ''
    const res = await axios.get(`https://api.quotable.io/authors?${queryString}`)
    const { results } = await res.data
    return {
        props: {
            authors: results
        }
    }
}