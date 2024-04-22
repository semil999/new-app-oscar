import React from 'react'

const ChildToParentData = (props) => {
    let data = "Ronak";
  return (
    <div className='text-center'>
      <h1 className='text-center'>ChildToParentData</h1>
      <button type='button' className='btn btn-success' onClick={() => props.getValue(data)}>Click</button>
    </div>
  )
}

export default ChildToParentData
