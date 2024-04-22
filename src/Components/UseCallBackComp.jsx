import React, { useCallback, useRef, useState } from 'react'
import Child1 from './Child1';
import { useCookies } from 'react-cookie';

const UseCallBackComp = () => {
    const [num, setNum] = useState(0);
    const data = useRef();

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    // const func = () => {
    //     console.log("Called");
    //     return 10
    // }

    const handleClick = () => {
      console.log(cookies.name)
      // console.log(data.current)
      // data.current.style.backgroundColor = "yellow"
      // setCookie("name", "Ronak1");
      // setCookie("number", 1);
      removeCookie("name")
    }

    const func = useCallback(() => {

    }, [])
    
  return (
    <div className='text-center'>
        <h1>{num}</h1>
        {/* <input type="text" name="fname" value={"Ronak"} ref={data}/> */}
        <div style={{height: "70px", width: "70px", border: "1px solid red", margin: "0 auto"}} className='mb-3' ref={data}>

        </div>
        <button className='btn btn-success' onClick={() => handleClick()}>Click</button>
        <Child1 func={func}/>
    </div>
  )
}

export default UseCallBackComp
