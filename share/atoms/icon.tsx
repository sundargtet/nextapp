import { IconButton } from '@chakra-ui/react'
import { icons } from '@/utils/icons'
import { TIcon } from '@/typecheck/types'

export default function Icon({ type, handleClick, ...rest }: TIcon) {
    const { Istyle, ...props } = rest
    const getIcons = () => {
        const Logo = icons[type]
        return <Logo style={Istyle} />
    }
    return (
        <>
            <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='bookmark'
                icon={getIcons()}
                onClick={handleClick}
                {...props}
            />
        </>
    )
}