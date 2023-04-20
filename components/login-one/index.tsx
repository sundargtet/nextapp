import { Box, Stack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import FramerComp from '@/share/organisms/framer'
import LoginForm from '@/share/molecules/login-form'

export default function LoginOne() {
    const [variants] = useMediaQuery('(max-width: 760px)')
    const handleSubmit = () => {
        localStorage.setItem('token', '1234')
        window.location.reload()
    }
    return (
        <>

            <Stack direction={variants ? 'column' : 'row'} spacing={0} h='80vh'>
                <Box w={variants ? '100%' : '50%'} h='100%'>
                    <FramerComp />
                </Box>
                <Box w={variants ? '100%' : '50%'} h='100%' p={10}>
                    <LoginForm handleSubmit={handleSubmit} />
                </Box>
            </Stack>
        </>
    )
}