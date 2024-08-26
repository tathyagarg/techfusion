import './App.css';

import Home from './pages/home';
import Events from './pages/events';

import { BrowserRouter, Routes, Route, useLocation, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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
