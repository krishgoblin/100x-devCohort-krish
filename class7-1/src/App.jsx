import { useState, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate, Link} from "react-router-dom"
import { Suspense } from 'react'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))



function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      
        <BrowserRouter>
            <Appbar />
            <Routes>
                <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
                <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
            </Routes>
        </BrowserRouter>
    </div>
    </>
  )

  function Appbar(){
    const navigate = useNavigate();

    return <nav style={{backgroundColor : "rosybrown", padding: 5}}><ul>
        <li>Home</li>
        <li>Support</li>
        <li>Messages</li>
        <li>Notification</li>
        </ul>
          {/* <Link to="/">Landing</Link>
          <Link to="/dashboard">Dashboard</Link> */}
        <button onClick={() => {
          // window.location.href="/dashboard"
          navigate("/dashboard")
          }}>DashBoard</button>
        <button onClick = {() => {
          // window.location.href="/"
          navigate("/")
        }}>Landing</button>
        </nav>
  }
}

export default App
