import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Notfoundpage from './components/Notfoundpage'
import Home from './components/Home'

let routers = createBrowserRouter([
  {path: '*' , element: <Notfoundpage/>} ,
  {
    path:'Portfolio' , element: <Layout/>, children :[
      {index: true , element: <Home/>},
      {path: 'about' , element: <About/>},
      {path: 'portfolio' , element: <Portfolio/>},
      {path: 'contact' , element: <Contact/>},
      {path: '*' , element: <Notfoundpage/>}
    ]
  }
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App
