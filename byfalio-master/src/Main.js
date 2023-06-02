import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages/main/Home';    
import Modals from './components/pages/Modals';
import axios from 'axios';
import Login from './components/pages/authentication/Login';
import { AuthContextProvider } from "./shared/AuthContext";
import Users from './components/pages/authentication/Users'
import ProtectedRoute from './shared/ProtectedRoute';
import Register from './components/pages/authentication/Register';
import Profile from './components/pages/authentication/profile/Profile';

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
        <Route path='/login' element={
        <ProtectedRoute accessBy="non-authenticated">
                  <Login />
                </ProtectedRoute>}>
        
        </Route>
        <Route path='/register' element={
        <ProtectedRoute accessBy="non-authenticated">
                  <Register />
                </ProtectedRoute>}>
        
        </Route>
        <Route path='/profile' element={
        <ProtectedRoute accessBy="authenticated">
                  <Profile />
                </ProtectedRoute>}>
        
        </Route>
        {/* <Route exact path='/account' element={<Login/>} /> */}
        <Route exact path='/modals' element={<Modals />} />
        <Route exact path='/users' element={<Users />} />
    </Routes>
        </AuthContextProvider>
    </Router>
    
);
}
    
export default Main;