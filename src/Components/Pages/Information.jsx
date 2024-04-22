import React from 'react'
import { Outlet } from 'react-router-dom'

const Information = () => {
  return (
    <div className='container'>
      <h1>Information</h1>
      <Outlet />
    </div>
  )
}

export default Information
