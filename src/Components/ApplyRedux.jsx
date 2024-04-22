import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countMinus, countPlus } from './Redux/Action/countAction';

const ApplyRedux = () => {
    const count = useSelector(state => state?.count?.count)
    const dispatch = useDispatch();
  return (
    <>
      <h2 className='text-center'>{count}</h2>
      <div className='text-center'>
        <button className='btn btn-success me-2' onClick={() => dispatch(countPlus())}>PLUS</button>
        <button className='btn btn-danger' onClick={() => dispatch(countMinus())}>MINUS</button>
      </div>
    </>
  )
}

export default ApplyRedux
