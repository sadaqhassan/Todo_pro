import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'

const App = () => {
  const [user,setUser] = useState(null)
  return (
    <div>
      <Routes>
        <Route path='/' element={!user ? <Auth/> : null}>

        </Route>
      </Routes>
    </div>
  )
}

export default App