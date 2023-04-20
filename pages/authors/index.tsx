import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AuthorsCard from "@/share/molecules/authors-card"
import { Stack } from "@chakra-ui/react"
import { IAuthorDetails, IAuthors, IAuthorQuery } from '@/typecheck/interfaces'

export default function Authors({ authors }: IAuthors) {
    const [authorsList, setAuthorsList] = useState(authors)
    const router = useRouter()

    const handleAuthor = async (author: string) => {
        const res = await axios.get(`https://api.quotable.io/authors?slug=${author}`)
        const { results } = await res.data
        setAuthorsList(results)
        router.push(`/authors?slug=${author}`, undefined, { shallow: true })
    }

    useEffect(() => {
        setAuthorsList(authors)
    }, [authors])

    return (
        <Stack spacing={4} p={4}>
            {
                authorsList.map((author: IAuthorDetails) =>
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

export const getServerSideProps = async ({ query }: IAuthorQuery) => {
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