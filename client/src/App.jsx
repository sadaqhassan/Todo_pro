import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import { UseAuthContext } from './Context/AuthContext'
import Layout from './Pages/Layout'

const App = () => {
  const {user} = UseAuthContext()
  return (
    <div className='bg-green-500'>
      <Routes>
        <Route path='/' element={!user ? <Auth/> : <Layout/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App