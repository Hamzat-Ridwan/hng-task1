import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Profile from './components/profile/Profile'
import Links from './components/links/Links'
import Socials from './components/socials/Socials'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
