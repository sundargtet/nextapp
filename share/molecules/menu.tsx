import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icon from '../atoms/icon'

export default function MenuBar() {
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
                    icon={<Icon type='user' />}
                    variant='outlined'
                    borderRadius={'50px'}
                />
                <MenuList>
                    <MenuItem icon={<Icon type='logout' />} onClick={handleLogout}>
                        logout
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}