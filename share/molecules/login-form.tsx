import { useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

export default function LoginForm({ handleSubmit }: any) {
    const [details, setDetails] = useState({
        username: '',
        password: ''
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
    const handleChange = (e: any) => {
        const { value, name } = e.target
        setDetails({
            ...details,
            [name]: value
        })
    }
    return (
        <FormControl >
            <FormLabel>
                user name
            </FormLabel>
            <Input type='text' value={details.username} name='username' onChange={handleChange} />
            <FormLabel>
                password
            </FormLabel>
            <Input type='text' value={details.password} name='password' onChange={handleChange} />
            <Button
                mt={4}
                colorScheme='teal'
                onClick={handleSubmit}
                isDisabled={isSubmitDisabled}
            >
                Submit
            </Button>
        </FormControl>
    )
}