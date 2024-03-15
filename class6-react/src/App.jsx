import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=3;

function App() {
  return <>
  <Cardwrapper innercomponent={<TextComponent />} />
  </>
  // const [todos, setTodos] = useState([
  //   {id: 1,  
  //   title:"Learn React",
  //   description:"In mtes"},
  //   {id: 2,
  //   title:"Go to gym",
  //   description:"afer exams"},
  //   {id: 3,
  //   title:"Go to Home",
  //   description:"afer exams on 21st"}]);

  //   function addtodo(){
  //     setTodos([...todos, {
  //       id: counter++,
  //       title: Math.random(),
  //       description: Math.random()
  //     }])
  //   }

  // return <>
  //   <button onClick={addtodo}>Click to add todo</button>
  //   {todos.map(todo=><Todo title={todo.title} description={todo.description}></Todo>)}
  // </>





//   return <>  
//     <HeaderwithButtons></HeaderwithButtons>
//     <Header title="You are looking beautiful"></Header>
//     <Header title="You are looking beautiful"></Header>
//   </>
// }

// function HeaderwithButtons(){
//   const [title, setTitle] = useState("My name is Krish");

//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }

//   return <>
//   <button onClick={updateTitle}>Click to Change</button>
//     <Header title={title}></Header>
//   </>

}

function Cardwrapper({innercomponent}){
  return <div style={{border:"2px solid black"}} >
    {innercomponent}
  </div>
}

function TextComponent(){
  return <div>
    Hi there!!
  </div>
}

function Todo({title, description}){
  return <>
  <h1>{title}</h1>
  <h2>{description}</h2>
  </>
}


function Header({title}){
  return <div>
      {title}
  </div>
}

export default App
