import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>

      </Routes>
      <Analytics />
    </>
  )
}

export default App