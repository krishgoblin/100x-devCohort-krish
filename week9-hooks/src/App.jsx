import { useEffect, useState } from 'react'
import axios from 'axios'

function useDebouncing(value, delay){
  const [debouncedValue, setValue] = useState(value);

  useEffect(()=>{
    const int = setTimeout(()=>{
      setValue(value);
    }, delay);
    return ()=> clearTimeout(int)
  },[value, delay]);

  return debouncedValue;

} 

//Testing

function App(){
  const [inputvalue, setInputvalue] = useState("");
  const debouncedvalue = useDebouncing(inputvalue, 500);

  console.log(debouncedvalue);
  
  return <>
    <p>You searched: {debouncedvalue}</p>
    <div>Search here: </div>
    <input type = "text"
    value = {inputvalue}
    onChange={(e) => setInputvalue(e.target.value)}
    placeholder = "Search..."/>
  </>
}






//data fetching custom hook

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} key={todo.id} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }



//Ugly way to do things

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }


// function App() {

//   const [render, setRender] = useState(true);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setRender(false)
//     }, 10000)
//   }, []);
//   return (
//     <>
//       {render ? <MyComponent></MyComponent> : <div></div>}
//     </>
//   )
// }



// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("On mount")

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("Cleanup code")
//     };
//   }, []);

//   // Render UI
// }


//STATE classbased and functional based

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


export default App
