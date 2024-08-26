import Transitions from '../components/transitions'
import '../styles/home.css'

export default function Home() {
    return (
        <>
            <Transitions></Transitions>
            <div className="content centerify">
                <h1 className='header'>TECH</h1>
                <h1 className='header'>FUSION</h1>
                <button className='contact'>REGISTER NOW!</button>
            </div>
        </>
    )
}