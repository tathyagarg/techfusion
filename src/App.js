import './App.css';

import Home from './pages/home';
import Events from './pages/events';
import Techknowquiz from './pages/events/techknowquiz';
import Hackathon from './pages/events/hackathon';
import Gamefiesta from './pages/events/gamefiesta';
import DecryptionDuel from './pages/events/decryptionduel';

import { BrowserRouter, Routes, Route, useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/navbar'

const Animated = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route exact path='/' Component={Home}/>
                <Route exact path='/events' Component={Events}/>
                <Route exact path='/events/techknowquiz' Component={Techknowquiz}/>
                <Route exact path='/events/hack-a-thon' Component={Hackathon}/>
                <Route exact path='/events/gamefiesta' Component={Gamefiesta}/>
                <Route exact path='/events/decryption-duel' Component={DecryptionDuel}/>
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    // useEffect(() => {
    //     const links = document.getElementsByClassName('navlink');
    //     const transitioner = document.getElementById('transitioner');

    //     for (let link of links) {
    //         link.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             transitioner.classList.add('slide')
    //         })
    //     }
    // })

    return (
        <div className='background'>
            <BrowserRouter>
                <Navbar/>
                <Animated/>
            </BrowserRouter>
        </div>
    );
}

export default App;
