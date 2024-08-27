import '../styles/guidelines.css'
import Transitions from "../components/transitions"
import { useEffect } from 'react';

const PAGE_INDEX = 2;

export default function Guidelines() {
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
            <div className="content">
                <div className="terminal-container">
                    <div className="terminal">
                        <h1>GUIDELINES</h1>
                    </div>
                </div>
                <div className="rules-container">
                    <ul>
                        <li>It is an online event.</li>
                        <li>Students cannot participate in multiple events.</li>
                        <li>Students are only allowed to participate through their school.</li>
                        <li>Schools must ensure that their registration form is complete and as per requirements.</li>
                        <li>Registration Foms must be filled by a teacher in-charge only.</li>
                        <li>Offensive language or indecent behavior will not to be tolerated.</li>
                        <li>Participants should be present at the time allotted to them.</li>
                        <li>WhatsApp group will be created to coordinate with the schools.</li>
                        <li>The decision of the judges will be final.</li>
                        <li>Not abiding by the rules and regulations will lead to instant disqualification.</li>
                    </ul>
                </div>
                <div className='buffer'></div>
            </div>
        </>
    )
}