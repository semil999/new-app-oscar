import React, { useState } from 'react'

const CustomComp = (value) => {
    const [val, setVal] = useState(value)
    const func = (props) => {
        setVal(props)
    }
  return [val, func]
}

export default CustomComp
