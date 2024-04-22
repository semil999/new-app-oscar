import React, { memo } from 'react'

const Child1 = () => {
    console.log("Child")
  return (
    <div className='text-center'>
      <h1>Child</h1>
      {/* <Child2 data={props.data}/> */}
    </div>
  )
}

export default memo(Child1)
