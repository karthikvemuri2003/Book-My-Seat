import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Sid from './components/Sid'

function App() {
  return (
    <div>
      <h1>Karthik</h1>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App

