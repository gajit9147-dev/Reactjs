
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
   <div className='w-full h-screen duration-300' style={{ backgroundColor:color }}>
    <div className='fixed flex flex-wrap bg-white gap-4 shadow-md justify-center bottom-12 inset-x-0 px-2 py-1 rounded-2xl'>
      <button 
      onClick={()=> setColor("green")}
      className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{background: "green"}}>
        Green</button>

         <button onClick={()=> setColor("blue")} 
         
         className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{background: "blue"}}>
        Blue</button>

         <button onClick={()=> setColor("pink")} 
         
         className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{background: "pink"}}>
        Pink</button>

         <button onClick={()=> setColor("gray")} 
         
         className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{background: "gray"}}>
        Gray</button>

         <button onClick={()=> setColor("orange")} 
         
         className='outline-none px-3 py-2 rounded-full text-white shadow-lg' style={{background: "orange"}}>
        Orange</button>
    </div>
   </div>
  )
}

export default App
