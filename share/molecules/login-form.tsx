import { useEffect, useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import SubmitButton from '../atoms/submit'

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
    useEffect(()=>{
        if(details.username !== '' && details.password !== ''){
            setIsSubmitDisabled(false)
        }else{
            setIsSubmitDisabled(true)
        }
    },[details])
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
                variant='login'
                mt={4}
                onClick={handleSubmit}
                isDisabled={isSubmitDisabled}
                w='100%'
            >
                Submit
            </Button>
            {/* <SubmitButton/> */}
        </FormControl>
    )
}