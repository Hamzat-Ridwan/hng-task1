import React from 'react'
import './Links.css'

const links = [
    {title: 'Twitter', url: 'https://www.twitter.com', id: ''},
    {title: 'Zuri Team', url: 'https://training.zuri.team/'},
    {title: 'Zuri Books', url: 'http://books.zuri.team'},
    {title: 'Python Books', url: 'https://books.zuri.team/python-for-beginners?ref_id=Ridwan Hamzat'},
    {title: 'Background Check For Coders', url: 'https://background.zuri.team'},
    {title: 'Design Books', url: 'https://books.zuri.team/design-rules'},
]

const Links = () => {
  return (
    <div className='links'>
        {
            links.map((link, index)=>(
                <a href={link.url} key={index} >
                    <div className='link-container'>
                        {link.title}
                    </div>
                </a>
            ))
        }
    </div>
  )
}

export default Links