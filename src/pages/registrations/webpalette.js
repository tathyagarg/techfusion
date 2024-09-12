import Transitions from "../../components/transitions"

export default function WebPaletteRegistration() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content abs'>
                <div className='folder-holder'>
                    <a href='https://forms.gle/4z2RWcxArZtGUNJt6' className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">SCHOOL REGISTRATION</div>
                        </div>
                    </a>
                    <a href="https://forms.gle/8pttfP5fnqZxTNTL9" className="res-folder">
                        <div>
                            <div className="folder-img"></div>
                            <div className="folder-name">INDIVIDUAL REGISTRATION</div>
                        </div>
                    </a>
                </div>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>REGISTRATION</h1>
                        <h1>WEB PALETTE</h1>
                    </div>
                </div>
            </div>
        </>
    )
}