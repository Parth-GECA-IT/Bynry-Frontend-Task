import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import User from './Components/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter([
  {
      path:"/",
      element: <><App/></>
  },
  // {
  //     path: "/login",
  //     element: <><Login/></>
  // },
  {
      path: "/user/:username",
      element: <><User /></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

