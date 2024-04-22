import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Form from './Form'
import Table from './Table'

const FunctionBaseRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to={"/form"} />}/>
            <Route path='/form' element={<Form />}>
                <Route path=':id' element={<Form />}/>
            </Route>
            <Route path='/table' element={<Table />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default FunctionBaseRouting
