import React, { useReducer } from 'react'

const ReducerComp = () => {

    const reducerFunction = (state, action) => {
        switch(action.type){
            case "PLUS":
                return state + 1

            case "MINUS":
                return state - 1

            default:
                return state
        }
    }

    const [number, dispatch] = useReducer(reducerFunction, 101)

  return (
    <div className='text-center'>
        <h1>{number}</h1>
      <button className='btn btn-success me-2' onClick={() => dispatch({type: "PLUS"})}>PLUS</button>
      <button className='btn btn-danger' onClick={() => dispatch({type: "MINUS"})}>MINUS</button>
    </div>
  )
}

export default ReducerComp
