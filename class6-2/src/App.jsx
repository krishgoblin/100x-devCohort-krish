import { useMemo, memo, useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
  // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, []);

  useEffect(() => {
  // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, []);

  useEffect(() => {
  // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000);
  }, [exchange1Data, exchange2Data]);

  const calcuateCryptoReturns = function() {
  return exchange1Data.returns + exchange2Data.returns;
  }
  const incomeTax = (calcuateCryptoReturns() + bankData.income) * 0.3;

  return (
  <div>
  hi there, your income tax returns are {incomeTax}
  </div>
  )
}


//------------------------------X-------------------------------------
// Used Memo and useCallback

// function App(){
//   const [count, setCount] = useState(0);

//   const click = useCallback(()=>{
//     console.log("click");
//     return (
//       <>
//       <h1>Inside click fucntion called by Child component
//       </h1>
//       </>
//     )
//   })

//   return(
//     <>
//     <Child Click={click} />
//     <button onClick={()=>{setCount(count+1)}}>Click me {count}</button>
//     </>
//   )
// }

//  const Child = memo(({Click})=>{
//   return(<>
//     <button onClick={Click}>Button Clicked </button>
//   </>)
// })


//------------------------------X-------------------------------------

// Using useMemo

//Ugly wayyy CUz a Re-render happens and everthing rerenders rather than the only changed value
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);


//   let count = useMemo(()=>{
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//     count = count + i;
//   }
//   return count;
//   }, [inputValue]);

//   return <div>
//     <input onChange={function(e) {
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from 1 to n"}></input>
//     <br />
//     Sum from 1 to {inputValue} is {count}
//     <br />
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>Counter ({counter})</button>
//   </div>
// }


//------------------------------X-------------------------------------
      

// function App(){
//   const [selectedid, setSelectedId] = useState(1);

//   return <div>
//     <button onClick={()=>setSelectedId(1)}>1</button>
//     <button onClick={()=>setSelectedId(2)}>2</button>
//     <button onClick={()=>setSelectedId(3)}>3</button>
//     <button onClick={()=>setSelectedId(4)}>4</button>
//     <br></br>
//     <Todo id={selectedid}/>
//   </div>
// }

// function todo(id1){
//   setTodo
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(()=>{
//     console.log("in effect");
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id).then(function(res){
//       setTodo(res.data.todo)
//     })
//   }, [id])

//   return <>
//   Id: {id}
//   <h1>
//     {todo.title}
//   </h1>
//   <h2>
//     {todo.description}
//   </h2>
//   </>
// }


//------------------------------X-------------------------------------

 // Using useEffect hook
// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(()=>{
//     setInterval(()=>{
//       axios.get("https://sum-server.100xdevs.com/todos").then(function(res){
//         setTodos(res.data.todos);
//       })
//     },10000)
//   }, [])

//   return (
//     <>
//       {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function FindTodo(){

// }

// function Todo({title, description}){
//   return<>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </>
// }

export default App
