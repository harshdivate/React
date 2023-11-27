import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
   <footer >
        <div className='bg-[#343a40] text-white font-mono p-4'>
            <div className='text-xl font-bold flex justify-center items-center ' >
                Copyright :<Link to="https://github.com/harshdivate">
                    GitHub
                </Link>
            </div>
        </div>
        
   </footer>
  )
}

export default Footer