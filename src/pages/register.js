import Transitions from "../components/transitions"
import '../styles/register.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PAGE_INDEX = 3;

export default function Registration() {
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
            <div className="content abs">
                <div className="folder-holder">
                    <Link to='/register/techknowquiz' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">TECHKNOWQUIZ</div>
                        </div>
                    </Link>
                    <Link to='/register/hack-a-thon' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">HACK-A-THON</div>
                        </div>
                    </Link>
                    <Link to='/register/decryption-duel' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">DECRYPTION DUEL</div>
                        </div>
                    </Link>
                    <Link to='/register/game-fiesta/valorant' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">GAME FIESTA - VALORANT</div>
                        </div>
                    </Link>
                    <Link to='/register/game-fiesta/fortnite' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">GAME FIESTA - FORTNITE</div>
                        </div>
                    </Link>
                    <Link to='/register/web-palette' className="reg-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">WEB PALETTE</div>
                        </div>
                    </Link>
                </div>
                <div className="terminal-container">
                    <div className="terminal">
                        <h1>REGISTRATION</h1>
                    </div>
                </div>
            </div>
        </>
    )
}