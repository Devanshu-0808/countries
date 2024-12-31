import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header.jsx'
import Selectmenu from './component/selectmenu.jsx'
import Countries from './component/Countries'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
