import React from 'react'
import {FaUser} from 'react-icons/fa'
import profile from '../../assets/Profile.png'
import DesktopShare from '../../assets/share.svg'
import MobileShare from '../../assets/mobile-share.svg'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='image-container'>
            <img id='profile__img' src={profile} alt='profile' className='image' />
        </div>
        <p id='twitter'>Ridwan Hamzat</p>
        <p id='slack'>Ridwan Hamzat</p>
        <img src={DesktopShare} alt="share" className='desktop-share'/>
        <img src={MobileShare} alt="share" className='mobile-share'/>
    </div>
  )
}

export default Profile