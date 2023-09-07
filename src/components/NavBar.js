import React from 'react'
import Logo from '../downloadcc.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >
      <img src={Logo} className='w-[50px]'/>
      <h3 className='text-blue-400'>Home</h3>
      <h3 className='text-blue-400'>AboutUs</h3>
      <h3 className='text-blue-400'>Courses</h3>
      <h3 className='text-blue-400'>SignIn</h3>
      <h3 className='text-blue-400'>Contact</h3>
     <div>
     <Link className='NavLink' to = "/">Home</Link>
      <Link className='NavLink' to = "/AboutUs">AboutUs</Link>
      <Link className='NavLink' to = "/Courses">Courses</Link>
      <Link className='NavLink' to = "/Contact">Contact</Link>
      <Link className='NavLink' to = "/SignIn">SignIn</Link>
     </div>
    </div>
  )
};

export default NavBar;