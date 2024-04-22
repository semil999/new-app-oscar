import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {
    const [num, setNum] = useState(0);
    // const func = () => {
    //     console.log("Called")
    //     return 10;
    // }

    const func = useMemo(() => {
        console.log("Called")
        return num
    }, [num])
  return (
    <div className='text-center'>
        <h1>{func}</h1>
        <h1>{num}</h1>
        <button className='btn btn-success' onClick={() => setNum(num + 1)}>Click</button>
    </div>
  )
}

export default UseMemoComp
