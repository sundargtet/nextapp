import { BiNavigation } from 'react-icons/bi'
import { IconButton } from '@chakra-ui/react'
import {icons} from '@/utils/icons'

export default function Icon({type, handleClick}:any) {
    const getIcons=()=>{
        const Logo = icons[type]
        return <Logo/>
    }
    return (
        <>
            <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='bookmark'
                icon={getIcons()}
                onClick={handleClick}
            />
        </>
    )
}