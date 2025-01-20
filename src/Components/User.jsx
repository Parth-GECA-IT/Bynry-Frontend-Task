import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
const User = () => {
    const params = useParams();
  return (
    <div>
      <Navbar/>
      {/* I'm a User {params.username}. */}
      User's Page
    </div>
  )
}

export default User
