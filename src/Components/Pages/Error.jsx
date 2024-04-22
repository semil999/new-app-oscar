import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
      <h1>Page not Found</h1>
      <Link to={"/"} className='btn btn-warning'>Go to Home</Link>
    </div>
  )
}

export default Error
