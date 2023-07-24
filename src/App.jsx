import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Menu } from './Components/Menu'
import { About } from './Components/About'

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
