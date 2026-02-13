import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className='flex gap-4 w-full bg-gray-100'>
      <Sidebar/>
      <div className='pt-4 pl-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout