import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'

const TwoForm = () => {
  return (
    <div className='row px-3'>
      <div className='col-6'>
        <Form1 />
      </div>
      <div className='col-6'>
        <Form2 />
      </div>
    </div>
  )
}

export default TwoForm
