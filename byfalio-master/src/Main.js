import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/pages/main/Home';    
import Modals from './components/pages/Modals';
import axios from 'axios';


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
    
  
    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         const apiUrl = 'https://fapi.binance.com/fapi/v1/depth?limit=10&symbol=BTCUSDT';
    //         axios.get(apiUrl).then((resp) => {
        
    //             const allPersons = resp.data;
    //             // allPersons.bids = allPersons.bids.map(function(each_element){
    //             //   return Number(each_element.toFixed(2));
    //             //  })

    //             // allPersons.asks = allPersons.asks.map(function(each_element){
    //             //     return Number(each_element.toFixed(2));
    //             // })

    //             // console.log(allPersons);
    //             var zero = 0;
                
    //             const total_sell = resp.data.bids.map(function(each_element){
    //                 const res = parseFloat(each_element[1]) + zero;
    //                 zero += parseFloat(each_element[1]);
    //                 return res;
    //             })
    //             console.log(total_sell);
    //             zero = 0;
    //             allPersons.bids = allPersons.bids.reverse().map(function(each_element) {
    //                 const res = parseFloat(each_element[1]) + zero;
    //                 zero += parseFloat(each_element[1]);
    //                 each_element.push(res.toFixed(4))
    //                 return each_element;
    //             }).reverse()
                
    //             allPersons.asks = allPersons.asks.reverse();
    //             setAppState(
    //                 {
    //                     total_sell: total_sell,
    //                     orders: allPersons
    //                 // // orders.bids = orders.bids.map(function(each_element){
    //                 // //     return Number(each_element.toFixed(2));
    //                 // // })
            
    //                 // // orders.asks = orders.asks.map(function(each_element){
    //                 // //     return Number(each_element.toFixed(2));
    //                 // // })})
    //              })
    //             }
    //             )}
    //         , 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [setAppState]);


    
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home  orders={appState.orders} total_sell={appState.total_sell}/>} />
        <Route exact path='/modals' element={<Modals />} />
    </Routes>
    </Router>
);
}
    
export default Main;