import React from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages/main/Home';    
import Modals from './components/pages/Modals';

function Main() {

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/modals' element={<Modals />} />
    </Routes>
    </Router>
);
}
  
export default Main;