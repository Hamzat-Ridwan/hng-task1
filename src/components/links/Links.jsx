import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

const links = [
    {title: 'Twitter Link', url: 'https://www.twitter.com/Hamza_rid1', id: 'twitter-link'},
    {title: 'Zuri Team', url: 'https://training.zuri.team/', id: 'btn__zuri'},
    {title: 'Zuri Books', subtext: '(This is where you will find books about design and coding)', url: 'http://books.zuri.team', id: 'books'},
    {title: 'Python Books', subtext: '(This is where you will get the best python books)', url: 'https://books.zuri.team/python-for-beginners?ref_id=RidwanHamzat', id: 'book__python'},
    {title: 'Background Check For Coders', subtext: '(Your best place for doing background checks on coders)', url: 'https://background.zuri.team', id: 'pitch'},
    {title: 'Design Books', subtext: '(Get this free design book by Zuri)', url: 'https://books.zuri.team/design-rules', id: 'book__design'},
]
 
const Links = () => {
  return (
    <div className='links'>
        {
            links.map((link, index)=>(
                <a to={link.url} key={index} id={link.id} title={link.subtext} >
                    <div className='link-container'>
                        {link.title}
                        {link.subtext? 
                        <div className='subtext'>{link.subtext}</div>:
                        ''
                        }
                    </div>
                </a>
            ))
        }
        <Link to='/contact' id='book__design'>
            <div className='link-container'>Contact Me</div>
        </Link>
    </div>
  )
}

export default Links