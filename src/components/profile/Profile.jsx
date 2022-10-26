import React from 'react'
import {FaUser} from 'react-icons/fa'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='image-container'>
            <FaUser />
        </div>
        <p>Ridwan Hamzat</p>
    </div>
  )
}

export default Profile