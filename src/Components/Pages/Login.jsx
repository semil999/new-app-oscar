import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const handleClick = () => {
        localStorage.setItem("isLogin", JSON.stringify(true))
        window.location.href = "/"
    }
  return (
    <div className='text-center'>
      <h1>Login</h1>
      <button className='btn btn-success' onClick={() => handleClick()}>Login Here</button>
    </div>
  )
}

export default Login
