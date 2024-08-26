import '../styles/events.css'
import { useEffect } from "react";
import Transitions from '../components/transitions'
import { Link } from 'react-router-dom';

const PAGE_INDEX = 0;

export default function Events() {
    useEffect(() => {
        const links = document.getElementsByClassName('navlink');
        for (let item of links) {
            item.classList.remove('active-page-a');
        }

        links[PAGE_INDEX].classList.add('active-page-a');
    }, [])

    return (
        <>
            <Transitions></Transitions>
            <div className='content abs'>
                <Link to='/events/techknowquiz' className="folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">TECHKNOWQUIZ</div>
                    </div>
                </Link>
                <Link to='/events/hack-a-thon' className="folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">HACK-A-THON</div>
                    </div>
                </Link>
                <Link to='/events/gamefiesta' className="folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">GAMEFIESTA</div>
                    </div>
                </Link>
                <Link to='/events/decryption-duel' className="folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">DECRYPTIONDUEL</div>
                    </div>
                </Link>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>EVENTS</h1>
                    </div>
                </div>
            </div>
        </>
    )
}