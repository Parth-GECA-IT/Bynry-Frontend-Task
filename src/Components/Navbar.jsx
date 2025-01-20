import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/user/Manish"><li>Users</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/user/Parth"><li>About</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar