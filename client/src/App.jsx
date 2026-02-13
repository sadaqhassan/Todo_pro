import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import { UseAuthContext } from './Context/AuthContext'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Students from './Pages/Students'
import Finance from './Pages/Finance'
import Teachers from './Pages/Teachers'

const App = () => {
  const {user} = UseAuthContext()
  return (
    <div >
      <Routes>
        <Route path='/' element={user ? <Auth/> : <Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='students' element={<Students/>}/> 
        <Route path='teachers' element={<Teachers/>}/> 
        <Route path='finance' element={<Finance/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default App