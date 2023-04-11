import { useEffect } from "react"
import { useRouter } from "next/router"

export default function LogInLayout({ children }: any) {
    const router = useRouter()
    useEffect(() => {
        router.replace('/')
    }, [])
    return (
        <div>
            <div>login navbar</div>
            {children}
        </div>
    )
}