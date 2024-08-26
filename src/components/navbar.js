import { useEffect } from 'react'
import HomeIcon from '../assets/home.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <a style={{position: 'absolute'}} href='/'>
                <img src={HomeIcon} className='home-icon'></img>
            </a>
            <ul>
                <li><Link className='navlink' to='/events'><span>EVENTS</span></Link></li>
                <li><Link className='navlink'>RESOURCES</Link></li>
                <li><Link className='navlink'>RULES</Link></li>
                <li><Link className='navlink'>REGISTER</Link></li>
            </ul>
        </div>
    )
}