import { useRouter } from "next/router"
import Image from "next/image"
import { Box, Button, Stack, useColorMode } from "@chakra-ui/react"
import LogoIcon from '@/public/logo.svg'
import Bookamarks from "../molecules/bookmarks"
import Menu from '../molecules/menu'
import Toggle from "../atoms/toggle"

export default function Navbar({ type }: any) {
    const { colorMode } = useColorMode()
    const router = useRouter()
    const handleHome = () => {
        router.push('/')
    }
    const getLink = () => {
        if (router.pathname === '/register') {
            return <Button variant='outline' onClick={() => router.push('/login')}>Login</Button>
        }
        return <Button variant='outline' onClick={() => router.push('/register')}>Register</Button>
    }
    return (
        <Box display={'flex'} justifyContent='space-between' bg={colorMode === 'light' ? 'gray.200' : 'dark.400'} h='50' pos={'sticky'} top={0} zIndex={1} px={6}>
            <Box>
                <Image src={LogoIcon} alt='logo' width={40} height={40} style={{ cursor: 'pointer' }} onClick={handleHome} />
            </Box>
            <Box display={'flex'}>
                {
                    type === 'loggedin' ?
                        <Stack direction={'row'} align='center' justify={'center'}>
                            <Bookamarks />
                            <Menu />
                            <Toggle />
                        </Stack> :
                        <Stack direction={'row'} align='center' justify={'center'}>
                            {getLink()}
                            <Button variant='outline' onClick={() => router.push('/about')}>about</Button>
                            <Toggle />
                        </Stack>
                }
            </Box>
        </Box>
    )
}