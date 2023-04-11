import Navbar from "@/share/organisms/navbar"

export default function LoggedInLayout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}