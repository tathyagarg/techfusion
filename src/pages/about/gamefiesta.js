import Transitions from '../../components/transitions'

export default function GameFiestaAbout() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content'>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>ABOUT-</h1>
                        <h1>GAME FIESTA</h1>
                    </div>
                </div>
                <div className='rules-container'>
                    <p>
                        Explore a diverse selection of highly engaging multiplayer video games designed to test and showcase your creativity, strategic thinking, teamwork, and gaming prowess , all in pursuit of victory.
                    </p>
                </div>
                <div className='buffer'></div>
            </div>
        </>
    )
}