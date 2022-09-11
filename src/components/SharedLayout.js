import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const SharedLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <footer>Footer</footer> */}
        </>
    )
}

export default SharedLayout