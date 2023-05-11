import React, { useEffect, useRef,useState} from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import TokenHeader from './TokenHeader';
import TokenChart from './TokenChart';
import TokenOrders from './TokenOrders';
import TokenBuy from './TokenBuy';
import NotificationList from '../../modals/NotificationList';
import Pnl from '../../modals/TradeHistory/Pnl';

import axios from 'axios';


function getMarkPrice(setMarkTokenPrice){
    const apiUrl = 'https://fapi.binance.com/fapi/v1/premiumIndex?symbol=BTCUSDT';
    axios.get(apiUrl).then((resp) => {
            let markPrice = parseFloat(resp.data.markPrice).toFixed(2);
            // console.log(price)
            setMarkTokenPrice(markPrice);
            
            let indexPrice = parseFloat(resp.data.indexPrice).toFixed(2);
            // console.log(price)
            // setIndexTokenPrice(indexPrice);
    })
}

function getIndexPrice(setIndexTokenPrice){
    const apiUrl = 'https://fapi.binance.com/fapi/v1/ticker/price?symbol=BTCUSDT';
    axios.get(apiUrl).then((resp) => {
        // console.log('a', resp.data)
        const price = resp.data.price;
        
        // console.log(all_orders)
        setIndexTokenPrice(price);
        }
        )
    // return this.all_orders;
}

function Home(props) {

    const [notificationShow, setNotificationShow] = useState(false);
    const handleNotificationClose = () => setNotificationShow(false);
    const handleNotificationShow = () => setNotificationShow(true);

    const [tokenSearchShow, setTokenSearcShow] = useState(false);
    const handleTokenSearchClose = () => setTokenSearcShow(false);
    const handleTokenSearchShow = () => setTokenSearcShow(true);

    const [tokenMarkPrice, setTokenMarkPrice] = useState(28000);
    
    const [tokenIndexPrice, setTokenIndexPrice] = useState(28000);

    const {total_sell, orders} = props;

    


    useEffect(() => {
        let interval = setInterval(() => {
            getMarkPrice(setTokenMarkPrice)
            getIndexPrice(setTokenIndexPrice)
        }, 100);

        

        return () => {
            clearInterval(interval);
        };
    }, []);


  return (
   
    <div className="wrap">

        <Header handleNotificationShow={handleNotificationShow}></Header>
        <div className="main">
            <Sidebar></Sidebar>
            <div className="main_row">
                <TokenHeader handleTokenSearchShow={handleTokenSearchShow} tokenSearchShow={tokenSearchShow} handleTokenSearchClose={handleTokenSearchClose}></TokenHeader>
                <div className="token_wrap sidebar_active">
                    <TokenChart></TokenChart>
                    <TokenOrders orders={orders} total_sell={total_sell} tokenMarkPrice={tokenMarkPrice}  tokenIndexPrice={tokenIndexPrice} ></TokenOrders>
                    <TokenBuy></TokenBuy>
                </div>
            </div>
        </div>

        <NotificationList notificationShow={notificationShow} handleNotificationClose={handleNotificationClose}></NotificationList>
        <Pnl></Pnl>

    </div>
  );

}
export default Home;
