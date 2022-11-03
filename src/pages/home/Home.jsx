import React from 'react'
import Footer from '../../components/footer/Footer'
import Links from '../../components/links/Links'
import Profile from '../../components/profile/Profile'
import Socials from '../../components/socials/Socials'


const Home = () => {
  return (
    <div>
        <Profile />
        <Links />
        <Socials />
        <Footer />
    </div>
  )
}

export default Home