import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoginOutlined, HowToRegOutlined } from '@mui/icons-material'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({/* setUser */}) => {
    // const { login } = useAuth()
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await login(input.email, input.password)
    //         setUser(true)
    //         navigate('/')
    //     } catch {
    //         setError('Failed to login')
    //     }
    //     setLoading(false)

    // }

    const resetState = () => {
        setIsSignup(!isSignup)
        setInput({ email: '', password: '' })
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
                <Typography variant='h2' padding={3} textAlign='center'>Login</Typography>
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
                <Button
                    // disabled={loading}
                    endIcon={<LoginOutlined />}
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{
                        marginTop: 2
                    }}
                >Login</Button>
                <Link style={{ color: '#1976d2' }} to='/signup'>
                    <Button
                        // disabled={loading}
                        endIcon={<HowToRegOutlined />}
                        onClick={resetState}
                        sx={{
                            marginTop: 2,
                            borderRadius: 3
                        }}
                    >
                        Sign Up
                    </Button>
                </Link>

                <span className='link badge text-bg-light mt-3'>Forgot your password?</span>
            </Box>
        </form >
    )
}

export default Login