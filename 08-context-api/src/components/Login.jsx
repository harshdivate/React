import React,{useState,useContext} from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState(''); 
    const {setUser} = useContext(userContext);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password});
    }  
    return (
        <>
        <h1>Login</h1>
        <input type="text" placeholder='Username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="password" placeholder='Password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button
        onClick={handleSubmit}
        
        >Login</button>
        </>
    )
}

export default Login