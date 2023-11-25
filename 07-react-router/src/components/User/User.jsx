import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} =useParams()
  return (
    <div className='w-full text-center font-bold text-white text-cyan-400 m-4 text-xl'>User:{id}</div>
  )
}

export default User