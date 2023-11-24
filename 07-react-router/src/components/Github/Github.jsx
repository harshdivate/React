import React, { useEffect } from 'react'
import { useState } from 'react'
import useGitHubData from '../hooks/useGitHubData';


function Github() {
    const data = useGitHubData('harshdivate');
    const url = data.avatar_url;
    console.log(data.name);
    
    
  return (
    <div className='flex flex-wrap '>
        <img  src={url} className='rounded-full '>
        </img>
        <div className='flex justify-center items-center grow'>
        <h1 className='text-xl font-bold text-black  hover:text-cyan-500'>Name :{data.name}</h1>
        </div>
        
    </div>
  )
}

export default Github