import Transitions from '../components/transitions'

export default function OC() {
    return (
        <>
            <Transitions></Transitions>
            <div className='content'>
                <div className='folder-holder'>
                    <div className='folder'>
                        <div className="folder-img"></div>
                        <div className="folder-name">KANIKA MOHAN</div>
                        <hr/>
                        <div className="folder-name">HEAD OF EVENT</div>
                    </div>
                    <div className='folder'>
                        <div className="folder-img"></div>
                        <div className="folder-name">DEVINA JHA</div>
                        <hr/>
                        <div className="folder-name">HEAD OF DESIGN</div>
                    </div>
                    <div className='folder'>
                        <div className="folder-img"></div>
                        <div className="folder-name">TEJUS REDDY BASIREDDYGARI</div>
                        <hr/>
                        <div className="folder-name">HEAD OF EVENT</div>
                    </div>
                    <div className='folder'>
                        <div className="folder-img"></div>
                        <div className="folder-name">TATHYA GARG</div>
                        <hr/>
                        <div className="folder-name">HEAD OF TECH</div>
                    </div>
                </div>
                <div className='terminal-container'>
                    <div className='terminal'>
                        <h1>ORGANIZING</h1>
                        <h1>COMMITTEE</h1>
                    </div>
                </div>
            </div>
        </>
    )
}