// import { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* FLEX BOX */}
      <div style = {{display:"flex", justifyContent:"space-between"}}>
        <div style = {{backgroundColor:"red"}}>Hola</div>  
        <div style = {{backgroundColor:"Green"}}>Hola</div>  
        <div style = {{backgroundColor:"Blue"}}>Hola</div>  
        <div style = {{backgroundColor:"pink"}}>Hola</div>  
        <div style = {{backgroundColor:"yellow"}}>Hola</div>  
      </div>
      <br></br>
      <div className='flex justify-between'>
        <div className='bg-red-500'>Hola</div>  
        <div className='bg-green-500'>Hola</div>  
        <div className='bg-blue-500'>Hola</div>  
        <div className='bg-pink-500'>Hola</div>  
        <div className='bg-yellow-500'>Hola</div>  
      </div>
      <br></br>

      {/* GRIDS */}
      <div className='grid grid-cols-5'>
        <div className='bg-red-500 col-span-2'>GRID</div>
        <div className='bg-blue-500 col-span-1'>GRID</div>
        <div className='bg-green-500 col-span-2'>GRID</div>
      </div>

      {/* RESPONSIVENESS */}
      <div className='bg-yellow-500 md:bg-red-500'>    
      {/* By default it will be yellow and if the width gets greater than md threshold then we would see red */}
          Responsive block example
      </div>

      <div className='grid grid-col-1 md:grid grid-cols-3'>
      <div className='bg-red-500 col-span-1'>GRID</div>
        <div className='bg-blue-500 col-span-1'>GRID</div>
        <div className='bg-green-500 col-span-1'>GRID</div>
      </div>
    </>
  )
}

export default App
