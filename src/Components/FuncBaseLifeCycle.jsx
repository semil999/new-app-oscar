import React, { useEffect, useState } from 'react'

const FuncBaseLifeCycle = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Hello")
      return () => {
          console.log("Unmounting")
      }
    }, []);

    useEffect(() => {
      console.log("Updating");
    }, [count]);
    
  return (
    <>
      <div className='text-center'>
        <h1 className='text-center'>Function Base Life Cycle {count}</h1>
        <button className='btn btn-success' onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </>
  )
}

export default FuncBaseLifeCycle
