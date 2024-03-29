import { useState } from 'react'
import { Countcontext } from './Countcontext'
import { useContext } from 'react'


//creating Counter using Context api
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Countcontext.Provider value = {count}>
      {/* <Count count = {count} setCount = {setCount}/> */}
      <Count setCount={setCount}></Count>
      </Countcontext.Provider>
    </div>
    </>
  )
    //wrap the child into a provider
  function Count({setCount}){       //here the big problem is that count doesn't even need setCount but still it is getting it as a prop.
    return <div>
      <Countrender />
      <Buttons setCount = {setCount}/>
    </div>
  }

  function Countrender(){
    const count = useContext(Countcontext);
    return <>
    <div>
      {count}
    </div>
    </> 
  }


  function Buttons({setCount}){
    const count = useContext(Countcontext);
    return <div>
      <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count-1);
      }}>Decrease</button>
    </div>
  }
}

export default App
