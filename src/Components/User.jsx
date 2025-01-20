import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import '.././App.css';

const User = () => {
    const params = useParams();
  return (
    <div className='black'>
      <Navbar/>
      {/* I'm a User {params.username}. */}
      User's Page
    </div>
  )
}

export default User
