import { NextRouter, useRouter } from 'next/router'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icon from '../atoms/icon'

export default function MenuBar() {
    const router: NextRouter = useRouter()
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='menu'
                    icon={<Icon type='user' Istyle={{ height: "25px", width: "25px" }} />}
                    variant='outlined'
                    borderRadius={'50px'}
                />
                <MenuList>
                    <MenuItem icon={<Icon type='logout' />} onClick={handleLogout}>
                        logout
                    </MenuItem>
                    <MenuItem icon={<Icon type='profile' />} onClick={() => router.push('/profile')}>
                        profile
                    </MenuItem>
                    <MenuItem icon={<Icon type='about' />} onClick={() => router.push('/about')}>
                        about
                    </MenuItem>

                </MenuList>
            </Menu>
        </>
    )
}