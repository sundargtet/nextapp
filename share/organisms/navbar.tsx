import { NextRouter, useRouter } from "next/router"
import Image from "next/image"
import { Box, Button, Stack, useColorMode } from "@chakra-ui/react"
import LogoIcon from '../../public/logo.svg'
import Bookamarks from "../molecules/bookmarks"
import Menu from '../molecules/menu'
import Toggle from "../atoms/toggle"
import { INavbar } from '@/typecheck/types'
import Icon from "../atoms/icon"

export default function Navbar({ type, btnRef, onOpen }: INavbar) {
    const { colorMode } = useColorMode()
    const router: NextRouter = useRouter()
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
            <Stack direction={'row'} align='center' justify={'center'}>
                {type === 'loggedin' && <Icon type='menu' Istyle={{ width: '30px', height: '30px' }} ref={btnRef} handleClick={onOpen} />}
                <Image src={LogoIcon} alt='logo' width={40} height={40} style={{ cursor: 'pointer' }} onClick={handleHome} />
            </Stack>
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