import '../styles/resources.css'
import { useEffect } from "react";
import Transitions from '../components/transitions'
import { Link } from 'react-router-dom';
import Brochure from '../assets/Techfusion - Brochure.pdf'

const PAGE_INDEX = 1;

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
                <div className='folder-holder'>
                    <a href='https://drive.google.com/file/d/1D15vZyTPuUhclXMIoxfYWuBV9nwSaRXj/view?usp=drive_link' target='_blank' className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">BROCHURE</div>
                        </div>
                    </a>
                    <Link to='/resources/oc' className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">ORGANIZING COMMITTEE</div>
                        </div>
                    </Link>
                </div>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>RESOURCES</h1>
                    </div>
                </div>
            </div>
        </>
    )
}