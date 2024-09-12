import Transitions from "../../components/transitions"

export default function HackathonRegistration() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content abs'>
                <div className='folder-holder'>
                    <a href='https://forms.gle/ye6VMk2SNK7G2yPS8' className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">SCHOOL REGISTRATION</div>
                        </div>
                    </a>
                    <a href="https://forms.gle/ZRkQXfJJsPpM7pEu6" className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">INDIVIDUAL REGISTRATION</div>
                        </div>
                    </a>
                </div>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>REGISTRATION</h1>
                        <h1>HACK-A-THON</h1>
                    </div>
                </div>
            </div>
        </>
    )
}