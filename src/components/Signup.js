import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoginOutlined, HowToRegOutlined } from '@mui/icons-material'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    // const { signup } = useAuth()
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     if (input.password !== input.confirmPassword) {
    //         console.log(input.password)
    //         console.log(input.confirmPassword)
    //         return setError('Password do not match')
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await signup(input.email, input.password)
    //         navigate('/')
    //     } catch {
    //         setError('Failed to create an account')
    //     }
    //     setLoading(false)

    // }

    const resetState = () => {
        setIsSignup(!isSignup)
        setInput({ email: '', password: '', confirmPassword: '' })
    }


    return (
        <form>
            <Box
                className='m-auto mt-5 p-3 d-flex flex-column justify-content-center align-items-center'
                borderRadius={5}
                maxWidth={400}
                boxShadow='5px 5px 10px #ccc'
                sx={{
                    ":hover": {
                        boxShadow: '10px 10px 20px #ccc'
                    }
                }}
            >
                <Typography variant='h2' padding={3} textAlign='center'>Sign Up</Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    name='email'
                    required
                    label='Email'
                    margin='normal'
                    type='email'
                    value={input.email}
                    onChange={handleChange}
                />
                <TextField
                    name='password'
                    required
                    label='Password'
                    margin='normal'
                    type='password'
                    value={input.password}
                    onChange={handleChange}
                />
                <TextField
                    name='confirmPassword'
                    required
                    label='Confirm Password'
                    margin='normal'
                    type='password'
                    value={input.confirmPassword}
                    onChange={handleChange}
                />
                <Button
                    // disabled={loading}
                    endIcon={<HowToRegOutlined />}
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{
                        marginTop: 2
                    }}
                >Sign Up</Button>
                <Link style={{ color: '#1976d2' }} to='/login'>
                    <Button
                        // disabled={loading}
                        endIcon={<LoginOutlined />}
                        onClick={resetState}
                        sx={{
                            marginTop: 2,
                            borderRadius: 3
                        }}
                    >
                        Login
                    </Button>
                </Link>
            </Box>
        </form >
    )
}

export default Signup