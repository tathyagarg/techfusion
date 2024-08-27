import Transitions from '../../components/transitions'

export default function HackathonGuidelines() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content'>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>GUIDELINES-</h1>
                        <h1>HACK-A-THON</h1>
                    </div>
                </div>
                <div className='rules-container'>
                    <ul>
                        <li>Participants will be required to screen share during the event and if found cheating will be disqualified.</li>
                        <li>The programming languages to be used at this event are <i><u>Python</u></i> and <i><u>Java</u></i>.</li>
                        <li>Each school may register up to 2 participants for the quiz.</li>
                        <li>Registration fee is ₹150 per participant.</li>
                        <li>For any inquiries about the event, please contact us via email at [insert email address].</li>
                        <li>Further details and topics will be communicated through the designated WhatsApp group.</li>
                    </ul>
                </div>
                <div className='buffer'></div>
            </div>
        </>
    )
}