import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3E7AF1',
    },
    secondary: {
      main: '#F14902',
    },
  },
  
});
const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>

      </Routes>
      </ThemeProvider>
      <Analytics />
      
    </>
  )
}

export default App