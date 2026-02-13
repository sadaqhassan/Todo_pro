import React from 'react'
import { NavLink } from 'react-router-dom'
import { DollarSignIcon, LayoutDashboardIcon, User2Icon, UserCheck2 } from 'lucide-react'

const MenuItems = ({sideOpen}) => {
  return (
    <div className={`flex flex-col pt-5 pl-4 space-y-5 pl-4`}>
        <NavLink to={'/'} className="flex items-center flex-wrap gap-4">
        <LayoutDashboardIcon/>
        {!sideOpen && "Dashboard" }
        </NavLink>
         <NavLink to={'students'} className="flex items-center flex-wrap gap-4">
        <User2Icon/>
        {!sideOpen && "Students" }
        </NavLink>
         <NavLink to={'teachers'} className="flex items-center flex-wrap gap-4">
        <UserCheck2/>
        {!sideOpen &&  "Teachers" }
        </NavLink>
         <NavLink to={'finance'} className="flex items-center flex-wrap gap-4">
        <DollarSignIcon/>
        {!sideOpen && "Finance" }
        </NavLink>
    </div>
  )
}

export default MenuItems