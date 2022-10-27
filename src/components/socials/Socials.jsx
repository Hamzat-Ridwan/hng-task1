import React from 'react'
import Slack from '../../assets/slack.svg'
import Github from '../../assets/github.svg'
import './Socials.css'

const Socials = () => {
  return (
    <div className='socials'>
        <img src={Slack} alt='slack' />
        <img src={Github} alt='github' />
    </div>
  )
}

export default Socials