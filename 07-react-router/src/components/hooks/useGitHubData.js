import {useEffect, useState} from 'react';

function useGitHubData(username) {
    const [data,setData] =useState({});
    useEffect(()=>{
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
    .then(response=>response.json())
    .then((response)=>{
            setData(response)
            console.log(response);
        })
    },[username])
    
    return data;
}

export default useGitHubData
