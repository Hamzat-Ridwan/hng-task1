import React from 'react'
import './Links.css'

const links = [
    {title: 'Twitter', url: 'https://www.twitter.com', id: ''},
    {title: 'Zuri Team', url: 'https://training.zuri.team/', id: 'btn__zuri'},
    {title: 'Zuri Books', url: 'http://books.zuri.team', id: 'books'},
    {title: 'Python Books', url: 'https://books.zuri.team/python-for-beginners?ref_id=Ridwan Hamzat', id: 'book__python'},
    {title: 'Background Check For Coders', url: 'https://background.zuri.team', id: 'pitch'},
    {title: 'Design Books', url: 'https://books.zuri.team/design-rules', id: 'book__design'},
]

const Links = () => {
  return (
    <div className='links'>
        {
            links.map((link, index)=>(
                <a href={link.url} key={index} id={link.id}>
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