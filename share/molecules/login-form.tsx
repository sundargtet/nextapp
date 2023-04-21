import { useEffect, useState } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { TLoginForm } from '@/typecheck/types'
import Button from '../atoms/button'

import SubmitButton from '../atoms/submit'


export default function LoginForm({ handleSubmit }: TLoginForm) {
    const [details, setDetails] = useState({
        username: '',
        password: ''
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setDetails({
            ...details,
            [name]: value
        })
    }
    useEffect(() => {
        if (details.username !== '' && details.password !== '') {
            setIsSubmitDisabled(false)
        } else {
            setIsSubmitDisabled(true)
        }
    }, [details])
    const handleReset=()=>{
        const {username, password} = details
        if(username !== '' || password !== ''){
            setDetails({
                username:"",
                password:''
            })
        }
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
                variant='login'
                mt={4}
                onClick={handleSubmit}
                isDisabled={isSubmitDisabled}
                w='100%'
            >
                Submit
            </Button>
            {/* <SubmitButton handleSubmit={handleSubmit} hadnleReset={handleReset}/> */}
        </FormControl>
    )
}