import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
  
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justift-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white">
          <button className="outline-none px-6 py-2 rounded " style={{backgroundColor:"red"}}  onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-6 py-2 rounded " style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-6 py-2 rounded " style={{backgroundColor:"grey"}} onClick={()=>setColor("white")}>White</button>
          <button className="outline-none px-6 py-2 rounded " style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          </div>
      </div>
     </div>

   
   
  )
}

export default App
