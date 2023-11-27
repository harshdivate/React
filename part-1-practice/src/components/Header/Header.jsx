import React from 'react'
import './Header.css'
import {Link,NavLink} from 'react-router-dom';

function Header() {
  return (
    <header className='shadow sticky min-w-lg duration-200 '>
    <nav className='py-2 '>
      <div  className='flex font-bold justify-between'>
    <div className='flex items-center'>
      <Link to="/"  className=' flex items-center'>
      <img src="/react-logo.png" className='rounded-full h-12  mx-2' ></img>
      <div className='text-xl hover:text-[#61DBFB]' >React Learning</div>
      </Link>
    </div>
    <div className='flex justify-around items-center  w-2/5'>
       
                <NavLink to="/" >
                   <p className='hover:text-[#61DBFB]'>Home</p>
                </NavLink>
           
            <NavLink to="/currency">
                    
                    <p className='hover:text-[#61DBFB]'>Currency</p>
                </NavLink>
            
            <NavLink to="/movie">
                   
                    <p className='hover:text-[#61DBFB]'>Movie</p>
                </NavLink>
    </div>
    </div>
  </nav>

  </header>
  )
}

export default Header