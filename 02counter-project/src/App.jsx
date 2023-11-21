import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCounter] = useState(15);
  function addValue() {
    console.log('Value added',Math.random());
    
    if(counter >= 20){
      alert('Value above 20');
      return;
    }
      counter += 1;
      setCounter(counter);
    
  }

  function removeValue() {  
    console.log('Value removed',Math.random());
    
    if(counter <= 0){
      alert('Value cannot be negative ');
      return;
    }
      counter -= 1;
      setCounter(counter);
    
    
  }
  return (
   
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button
       onClick={addValue}
      >Add Value</button>
      <br></br>
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
