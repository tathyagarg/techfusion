import Transitions from '../../components/transitions'

export default function HackathonAbout() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content'>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>ABOUT-</h1>
                        <h1>HACK-A-THON</h1>
                    </div>
                </div>
                <div className='rules-container'>
                    <p>
                        Hack-A-Thon is a thrilling competitive coding event where participants are tasked with solving a series of coding problems within a specified time frame. This event is designed to test and showcase your problemsolving abilities, algorithmic thinking, and coding skills in a high-energy environment.
                    </p>
                </div>
                <div className='buffer'></div>
            </div>
        </>
    )
}