import Transitions from "../../components/transitions"
import WindowIcon from '../../assets/window-icon.png'
import Arrow from '../../assets/arrow.png'
import Search from '../../assets/search.png'
import Folder from '../../assets/folder.png'
import { Link } from "react-router-dom"

export default function Gamefiesta() {
    return (
        <>
            {/* <script src="https://kit.fontawesome.com/6709d9c7d3.js" crossorigin="anonymous"></script> */}
            <Transitions></Transitions>
            <div className="content event-grid">
                <div className="folder-info-container">
                    <div className="folder-info">
                        <div className="folder-info-header">
                            <div className="circles">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="window-icon">
                                <div>
                                    <img src={WindowIcon}></img>
                                </div>
                                <div>
                                    <img src={Arrow}></img>
                                </div>
                            </div>
                            <div className="search-icon">
                                <img src={Search}></img>
                            </div>
                        </div>
                        <div className="folder-data-basic">
                            <img src={Folder}></img>
                            <div>
                                <h1>GAMEFIESTA</h1>
                                <h2>Modified: Today, 11:42 AM</h2>
                                <h2>2MB</h2>
                            </div>
                        </div>
                        <div className="general-information">
                            <h1>GENERAL</h1>
                            <hr></hr>
                            <ul>
                                <li>Kind: Folder</li>
                                <li>Size: 2009811 bytes (2MB on disk) for 3 items</li>
                                <li>Where: Macintosh HD ● Users ● Techfusion</li>
                                <li>Created: 26 August, 2024 at 6:38 PM</li>
                                <li>Modified: 26 August, 2024 at 6:38 PM</li>
                            </ul>
                            <h1>PREVIEW</h1>
                            <hr></hr>
                            <div className="preview-image-holder">
                                <img src={Folder}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-container guidlines-icon-container">
                    <Link to='/events/game-fiesta/guidelines'>
                        <div className="file-image-holder"></div>
                        <p>GUIDELINES.txt</p>
                    </Link>
                </div>
                <div className="icon-container registration-icon-container-1">
                    <Link to='/register/game-fiesta/fortnite'>
                        <div className="file-image-holder"></div>
                        <p>REGISTRATION-FORTNITE.txt</p>                        
                    </Link>
                </div>
                <div className="icon-container registration-icon-container-2">
                    <Link to='/register/game-fiesta/valorant'>
                        <div className="file-image-holder"></div>
                        <p>REGISTRATION-VALORANT.txt</p>
                    </Link>
                </div>
                <div className="icon-container about-icon-container">
                    <Link to='/events/game-fiesta/about'>
                        <div className="file-image-holder"></div>
                        <p>README.txt</p>
                    </Link>
                </div>
            </div>
        </>
    )
}