import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { LogOut, MenuIcon } from 'lucide-react'

const Sidebar = () => {
    const [sideOpen ,setSiteOpen] = useState(false)
  return (
    <div className={`${sideOpen ? "w-20 pl-4 pr-3 md:w-40" : "w-40 md:w-60"} bg-slate-50 h-screen flex flex-col justify-between border-r-2 flex-wrap border-gray-300`}>
        <MenuItems sideOpen={sideOpen} />
        <div className='flex items-center gap-2 mb-5 mx-4 mr-4 cursor-pointer bg-gray-300 shodow-2xl rounded p-4'>
            <LogOut />
            <span>Logout</span>
        </div>
        <button onClick={()=>setSiteOpen(!sideOpen)} className={`absolute  md:hidden top-4 flex-wrap ${sideOpen ? "md:left-54 left-20" : "md:left-50 left-40"}`}> <MenuIcon/> </button>
    </div>
  )
}

export default Sidebar