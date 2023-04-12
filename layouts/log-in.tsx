import { useEffect } from "react"
import { useRouter } from "next/router"
import { publicRoutes } from '@/utils/routes'
import Navbar from "@/share/organisms/navbar"
import { IChildren } from '@/typecheck/types'

export default function LogInLayout({ children }: IChildren) {
    const router = useRouter()
    useEffect(() => {
        if (publicRoutes.includes(router.pathname)) {
            router.push(router.pathname)
        } else {
            router.push('/login')
        }
    }, [])
    return (
        <div>
            <Navbar type='login' />
            {children}
        </div>
    )
}