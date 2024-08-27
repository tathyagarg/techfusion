import Transitions from "../components/transitions"
import '../styles/register.css'
import { useEffect } from "react";

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
                <a href='https://forms.gle/DmRxQ46FwJjRSAzbA' className="reg-folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">TECHKNOWQUIZ</div>
                    </div>
                </a>
                <a href='https://forms.gle/ye6VMk2SNK7G2yPS8' className="reg-folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">HACK-A-THON</div>
                    </div>
                </a>
                <a href='https://forms.gle/KPb6kqf8temWiqFbA' className="reg-folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">DECRYPTION DUEL</div>
                    </div>
                </a>
                <a href='https://forms.gle/YJ9qfK24SMuKunKD8' className="reg-folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">GAME FIESTA - VALORANT</div>
                    </div>
                </a>
                <a href='https://forms.gle/vACVrXJo6ej2xWy98' className="reg-folder">
                    <div>
                        <div className="folder-img"></div>
                        <div className="folder-name">GAME FIESTA - FORTNITE</div>
                    </div>
                </a>
                <div className="terminal-container-higher">
                    <div className="terminal">
                        <h1>REGISTRATION</h1>
                    </div>
                </div>
            </div>
        </>
    )
}