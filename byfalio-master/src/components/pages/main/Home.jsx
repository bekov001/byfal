import React, { useEffect, useRef,useState} from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import TokenHeader from './TokenHeader';
import TokenChart from './TokenChart';
import TokenOrders from './TokenOrders';
import TokenBuy from './TokenBuy';
import NotificationList from '../../modals/NotificationList';
import Pnl from '../../modals/TradeHistory/Pnl';


function Home() {

    const [notificationShow, setNotificationShow] = useState(false);
    const handleNotificationClose = () => setNotificationShow(false);
    const handleNotificationShow = () => setNotificationShow(true);

    const [tokenSearchShow, setTokenSearcShow] = useState(false);
    const handleTokenSearchClose = () => setTokenSearcShow(false);
    const handleTokenSearchShow = () => setTokenSearcShow(true);

    
  return (
   
    <div className="wrap">

        <Header handleNotificationShow={handleNotificationShow}></Header>
        <div className="main">
            <Sidebar></Sidebar>
            <div className="main_row">
                <TokenHeader handleTokenSearchShow={handleTokenSearchShow} tokenSearchShow={tokenSearchShow} handleTokenSearchClose={handleTokenSearchClose}></TokenHeader>
                <div className="token_wrap sidebar_active">
                    <TokenChart></TokenChart>
                    <TokenOrders></TokenOrders>
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
