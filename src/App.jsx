import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import Links from './components/links/Links'
import Socials from './components/socials/Socials'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  )
}

export default App
