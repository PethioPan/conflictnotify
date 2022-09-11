import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'

const useAuth = () => {
    const user = { loggedIn: true }
    return user && user.loggedIn
}

export default function PrivateRoute() {
    // const { currentUser } = useAuth()
    const isAuth = useAuth()
    // const isAuth = currentUser && currentUser.email
    return isAuth ? <Navigate to='/' /> : <Outlet />
}
