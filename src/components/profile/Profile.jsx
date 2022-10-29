import React from 'react'
import {FaUser} from 'react-icons/fa'
import profile from '../../assets/Profile.png'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='image-container'>
            <img id='profile__img' src={profile} alt='profile' className='image' />
        </div>
        <p id='twitter'>Ridwan Hamzat</p>
        <p id='slack'>Ridwan Hamzat</p>
    </div>
  )
}

export default Profile