import './App.css';

import Home from './pages/home';
import Events from './pages/events';
import Techknowquiz from './pages/events/techknowquiz';
import Hackathon from './pages/events/hackathon';
import Gamefiesta from './pages/events/gamefiesta';
import DecryptionDuel from './pages/events/decryptionduel';
import WebPalette from './pages/events/webpalette';
import Resources from './pages/resources';
import Guidelines from './pages/guidelines';
import TechknowquizGuidelines from './pages/guidelines/techknowquiz';
import DecryptionDuelGuidelines from './pages/guidelines/decryptionduel';
import GameFiestaGuidelines from './pages/guidelines/gamefiesta';
import HackathonGuidelines from './pages/guidelines/hackathon';
import WebPaletteGuidelines from './pages/guidelines/webpalette';
import Registration from './pages/register';
import TechknowquizAbout from './pages/about/techknowquiz';
import DecryptionDuelAbout from './pages/about/decryptionduel';
import GameFiestaAbout from './pages/about/gamefiesta';
import HackathonAbout from './pages/about/hackathon';
import WebPaletteAbout from './pages/about/webpalette';
import OC from './pages/oc';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
                <Route exact path='/events/game-fiesta' Component={Gamefiesta}/>
                <Route exact path='/events/decryption-duel' Component={DecryptionDuel}/>
                <Route exact path='/events/web-palette' Component={WebPalette}/>
                <Route exact path='/resources' Component={Resources}/>
                <Route exact path='/resources/oc' Component={OC}/>
                <Route exact path='/guidelines' Component={Guidelines}/>
                <Route exact path='/events/techknowquiz/guidelines' Component={TechknowquizGuidelines}/>
                <Route exact path='/events/hack-a-thon/guidelines' Component={HackathonGuidelines}/>
                <Route exact path='/events/game-fiesta/guidelines' Component={GameFiestaGuidelines}/>
                <Route exact path='/events/decryption-duel/guidelines' Component={DecryptionDuelGuidelines}/>
                <Route exact path='/events/web-palette/guidelines' Component={WebPaletteGuidelines}/>
                <Route exact path='/events/techknowquiz/about' Component={TechknowquizAbout}/>
                <Route exact path='/events/hack-a-thon/about' Component={HackathonAbout}/>
                <Route exact path='/events/game-fiesta/about' Component={GameFiestaAbout}/>
                <Route exact path='/events/decryption-duel/about' Component={DecryptionDuelAbout}/>
                <Route exact path='/events/web-palette/about' Component={WebPaletteAbout}/>
                <Route exact path='/register' Component={Registration}/>
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
