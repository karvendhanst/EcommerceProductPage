import React from 'react'
import profilePic from '../assets/images/profile.jpg'

const Navbar = () => {
  return (
    <nav className='px-30 py-3 flex justify-between items-center shadow-md bg-white'>
      <h3 className='cursor-pointer text-lg text-gray-600 font-extralight'>Ecommerce</h3>
      <div className="profile">
        <img src={profilePic} alt="Profile" className='w-10 rounded-full h-10 object-cover cursor-pointer'/>
      </div>
    </nav>
  )
}

export default Navbar