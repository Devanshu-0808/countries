import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header.jsx'
import Selectmenu from './selectmenu.jsx'
import Countries from './Countries.jsx'
import { ThemeContext } from '../contexts/ThemeContext.js'
import { usegetWindowSize } from '../CustomHook/customhook.js'
function Home() {
    
       const a=useContext(ThemeContext)
  const windowSize =usegetWindowSize()
   
    return (
        <>
          <Header/>
     <div>

    <Selectmenu/>
    
    <div className='flex flex-wrap w-[98%] absolute left-[10px] top-[200px]'>
    <h1>{windowSize.width}x{windowSize.height}</h1>
    <Countries />
   
    </div>
     </div>
        </>
    )
}

export default Home
