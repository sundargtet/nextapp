import { Box, Stack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import LoginForm from '@/share/molecules/login-form'
import FramerComp from '@/share/organisms/framer'

export default function Login() {
    const [variants] = useMediaQuery('(max-width: 760px)')
    const handleSubmit = () => {
        localStorage.setItem('token', '1234')
        window.location.reload()
    }
    return (
        <>
            <Stack direction={variants ? 'column' : 'row'} spacing={0} h='95vh'>
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