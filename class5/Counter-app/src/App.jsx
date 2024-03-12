import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const[count, setcount] = useState(0); 

  const [todos, SetTodos] = useState([{
    title: "Learn React",
    description: "Do it by end of MTEs",
  },
  {
    title: "Study for Exams",
    description: "Have to score atleast 22+ in each subject",
  }]);

  return (
    <div>
    {/* <Todo title = {todos[0].title} description = {todos[0].description} />
    <Todo title = {todos[1].title} description = {todos[1].description} /> */}

    {todos.map(function(todo){
      return <Todo title = {todo.title} description = {todo.description} />
    })}

    </div>
  )
  // function Onclickfunction() {
  //   setcount(count+1);
  // }
  // return (
  //   <div>
  //       <button onClick={Onclickfunction}>Counter {count}</button>
  //   </div>
  // )


  // return (
  // <div>
  //   <CustomButton count={count} setcount={setcount}></CustomButton> 
  //   <CustomButton count={count+100} setcount={setcount}></CustomButton> 
  //   <CustomButton count={count*9} setcount={setcount}></CustomButton> 
  // </div>
  // )
}


function Todo(props){
    return (<div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
    )
}

// function CustomButton(props){

//   function OnclickHandler(){
//     props.setcount(props.count+1);
//   }

//   return <button onClick={OnclickHandler}>Counter {props.count}</button>
// }

export default App
