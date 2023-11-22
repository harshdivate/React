import { useState ,useCallback ,useEffect ,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password ,setPassword] = useState("");


  //useRef hook
  const passwordRef =useRef(null);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator= useCallback(()=>{
    let pass= "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+='1234567890';
    }
    if(charAllowed){
      str += '~!@#$%^&*(){}';
    }
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
    
  },[length,numberAllowed,charAllowed ])


  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white py-10'>Password Generator</h1>
      <div className='w-full max-w-lg mx-auto shadow-md-rounded-lg my-8 px-4 py-3 bg-oranger-500 bg-gray-500 text-black'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref= {passwordRef}
          />
          <button 
          className='bg-blue-500 px-3'
          onClick ={copyPasswordToClipBoard}
          
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
