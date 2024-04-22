import React, { useContext } from 'react'
import { userContext } from '../App'

const Child3 = (props) => {
    const {userData, setUserData} = useContext(userContext)
    // console.log(user.userData)
  return (
    <div className='text-center'>
      <h1>Child3 :- {userData}</h1>
    </div>
  )
}

export default Child3
