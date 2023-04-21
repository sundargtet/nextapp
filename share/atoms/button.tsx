import { Button } from '@chakra-ui/react'

type IButton = {
    [x: string]: any;
}

export default function ButtonComp({
    className,
    children = 'click here',
    onClick,
    isDisabled = false,
    variant = 'primary',
    ...rest }
    : IButton
) {
    return (
        <Button
            className={`nxt-btn ${className}`}
            data-testid='nxt-btn'
            onClick={onClick}
            isDisabled={isDisabled}
            variant={variant}
            {...rest}
        >
            {children}
        </Button>
    )
}