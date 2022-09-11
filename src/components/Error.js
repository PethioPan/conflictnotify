import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-danger'>
      <h2>404 Error</h2>
      <p>Page Not Found</p>
      <Link to='/' className='btn btn-secondary'>Home</Link>
    </div>
  )
}

export default Error