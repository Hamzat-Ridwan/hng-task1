import React from 'react'
import {FaUser} from 'react-icons/fa'
import profile from './profile.png'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='image-container'>
            <img src={profile} alt='profile' className='image' />
        </div>
        <p>Ridwan Hamzat</p>
    </div>
  )
}

export default Profile