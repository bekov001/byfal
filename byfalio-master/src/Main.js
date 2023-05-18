import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages/main/Home';    
import Modals from './components/pages/Modals';
import axios from 'axios';
import Login from './components/pages/authentication/Login';
import { AuthContextProvider } from "./shared/AuthContext";
 
function Main() {

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    const [appState, setAppState] = useState(
        {   
            total_sell: [],
            orders: null
        }
    );
    


    
return (
    
    <Router>
       <AuthContextProvider>
    <Routes>
        <Route exact path='/' element={<Home  orders={appState.orders} total_sell={appState.total_sell}/>} />
        <Route exact path='/account' element={<Login/>} />
        <Route exact path='/modals' element={<Modals />} />
    </Routes>
        </AuthContextProvider>
    </Router>
    
);
}
    
export default Main;