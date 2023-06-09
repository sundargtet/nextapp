import { IconButton } from '@chakra-ui/react'
import { icons } from '../../utils/icons'
import { TIcon } from '../../typecheck/types'

interface IC {
    /**
     * icon name 
     */
    type : string;
    /**
     * on click action
     */
    handleClick? : ()=>void;
    /**
     * rest props
     */
    [x: string]: any;
}

export default function Icon({ type='error', handleClick, ...rest }: IC) {
    const { Istyle, ...props } = rest
    const getIcons = () => {
        const Logo = icons[type]
        if (Logo) return <Logo style={Istyle} />
        return <icons.error style={{ color: "red", ...Istyle }} data-testid='nxt-icon-element'/>
    }
    return (
        <>
            <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='icon-button'
                data-testid='icon-button'
                icon={getIcons()}
                onClick={handleClick}
                className='nxt-icon'
                {...props}
            />
        </>
    )
}