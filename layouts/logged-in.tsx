import { useRouter } from 'next/router'
import Navbar from "@/share/organisms/navbar"
import { IChildren } from '@/typecheck/types'

export default function LoggedInLayout({ children }: IChildren) {
    const router = useRouter()
    if (router.pathname === '/login' || router.pathname === '/register') {
        router.replace('/')
    }
    return (
        <>
            <Navbar type='loggedin' />
            {children}
        </>
    )
}