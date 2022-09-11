import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useAuth } from '../contexts/AuthContext'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-centers align-items-center'>
                <Link to='/' className='link p-2'>Logo</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end">
                        <Link to='about' className='link p-2'>About</Link>
                        <Link to='settings' className='link p-2'>Settings</Link>
                        <Link to='login' className='link p-2'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation