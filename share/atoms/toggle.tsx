import { Switch, useColorMode } from '@chakra-ui/react'

export default function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Switch onChange={toggleColorMode} colorScheme='red' variant='outline' />
        </>
    )
}