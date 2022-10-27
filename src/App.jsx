import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import Links from './components/links/Links'
import Socials from './components/socials/Socials'

function App() {

  return (
    <div className="App">
      <Profile />
      <Links />
      <Socials />
    </div>
  )
}

export default App
