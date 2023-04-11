import { Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function Abouts() {
    const {colorMode, toggleColorMode} = useColorMode()
    console.log('color mode', colorMode);
    return (
        <>
            <Box as="h1" color={'primary.500'}>
                <a>this is about page</a>
            </Box>
            <Button onClick={toggleColorMode}>Click here</Button>
            <Button variant='primary'>Click here</Button>
            <Button variant='secondary'>Click here</Button>
            <Button variant='shadow'>Click here</Button>
        </>
    )
}