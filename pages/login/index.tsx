import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Login() {
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
    const handleSubmit = () => {
        localStorage.setItem('token', '1234')
        window.location.reload()
    }
    useEffect(()=>{
        if(details.username && details.password){
            setIsSubmitDisabled(false)
        }else{
            setIsSubmitDisabled(true)
        }
    },[details])
    return (
        <>
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
        </>
    )
}