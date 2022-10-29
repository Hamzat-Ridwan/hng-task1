import React from 'react'
import ZuriLogo from '../../assets/zuri.svg'
import IngressiveLogo from '../../assets/ingressive.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={ZuriLogo} alt='zuri' className='zuri'/>
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
            <img src={IngressiveLogo} alt='ingressive' className='ingressive' />
        </div>
    </div>
  )
}

export default Footer