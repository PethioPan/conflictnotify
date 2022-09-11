import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
    // const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // async function handleLogout() {
    //     setError('')
    //     try {
    //         await logout()
    //         navigate('/login')
    //     } catch {
    //         setError('Failed to log out')
    //     }
    // }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center mb-4'>Profile</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <h2>Email: {currentUser && currentUser.email}</h2> */}
            <Link to='/update-profile' className='btn btn-primary w-50 mt-3-'>Update Profile</Link>
            <Link to='/login' className='link'>
                <Button variant='link'>
                    Log Out
                </Button>
            </Link>
        </div>
    )
}

export default Profile