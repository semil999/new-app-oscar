import React, { useContext } from 'react'
import Child3 from './Child3'
import { userContext } from '../App'

const Child2 = (props) => {
    const {userData, setUserData} = useContext(userContext);
  return (
    <div className='text-center'>
      <h1>Child2 :- {userData}</h1>
      <button className='btn btn-success' onClick={() => setUserData("Drashti")}>Click</button>
      <Child3 data={props.data}/>
    </div>
  )
}

export default Child2
