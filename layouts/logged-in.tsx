import { useRouter } from 'next/router'
import Navbar from "@/share/organisms/navbar"

export default function LoggedInLayout({ children }: any) {
    const router = useRouter()
    if (router.pathname === '/login' || router.pathname === '/register') {
        router.replace('/')
    }
    return (
        <>
            <Navbar type='loggedin'/>
            {children}
        </>
    )
}