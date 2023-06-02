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
import Positions from './Positions';


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


function getTickerData(setTickerData){
    const apiUrl = 'https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=BTCUSDT';
    axios.get(apiUrl).then((resp) => {
        // console.log('a', resp.data)
        const data = resp.data;
        
        setTickerData(data);
        }
        )
    // return this.all_orders;
}

function getFundingRate(setFundingRate){
    const apiUrl = 'https://fapi.binance.com/fapi/v1/fundingRate?symbol=BTCUSDT';
    axios.get(apiUrl).then((resp) => {
        // console.log('a', resp.data)
        const data = resp.data[99];
        
        console.log(data)
        setFundingRate(data);
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

    const [myPos, setMyPos] = useState([]);

    const [tickerData, setTickerData] = useState(0);

    const [fundingRate, setFundingRate] = useState([]);
    // const [message, setMessage] = useState('');
    //  useEffect(() => {
    //     if(localStorage.getItem('access_token') === null){                   
    //         window.location.href = '/account'
    //     }
    //     else{
    //      (async () => {
    //        try {
    //          const {data} = await axios.get(   
    //                         'http://localhost:8000/home/', {
    //                          headers: {
    //                             'Content-Type': 'application/json'
    //                          }}
    //                        );
    //          setMessage(data.message);
    //       } catch (e) {
    //         console.log('not auth')
    //       }
    //      })()};
    //  }, []);
    


    useEffect(() => {
        let interval = setInterval(() => {
            getMarkPrice(setTokenMarkPrice)
            getIndexPrice(setTokenIndexPrice)
        }, 100);
        
        getTickerData(setTickerData)
        let interval24 = setInterval(() => {
            getTickerData(setTickerData)
        }, 10000);

        getFundingRate(setFundingRate)
        let interval1 = setInterval(() => {
            getFundingRate(setFundingRate)
        }, 1000);
        

        return () => {
            clearInterval(interval);
            clearInterval(interval24);
            clearInterval(interval1);
        };
    }, []);


    function openPos(newPos) {
        setMyPos([...myPos, {
            id: newPos.id,
            type: newPos.type,
            openPrice: tokenMarkPrice,
            quantity: 100,

        }])
    }

  return (

    <div className="wrap">
     
        <Header handleNotificationShow={handleNotificationShow}></Header>
        <div className="main">
            <Sidebar></Sidebar>
            <div className="main_row">
                <TokenHeader fundRate={fundingRate} tickerData={tickerData} tokenPrice={tokenIndexPrice} handleTokenSearchShow={handleTokenSearchShow} tokenSearchShow={tokenSearchShow} handleTokenSearchClose={handleTokenSearchClose}></TokenHeader>
                <div className="token_wrap sidebar_active">
                    <TokenChart></TokenChart>
                    <TokenOrders orders={orders} total_sell={total_sell} tokenMarkPrice={tokenMarkPrice}  tokenIndexPrice={tokenIndexPrice} ></TokenOrders>
                    <TokenBuy openPos={openPos}></TokenBuy>
                </div>
            </div>
             
        </div>

        <NotificationList notificationShow={notificationShow} handleNotificationClose={handleNotificationClose}></NotificationList>
        <Pnl></Pnl>
       
        <div className='positions'>
     {myPos && myPos.map(position => 
            <Positions position={position} tokenPrice={tokenIndexPrice}></Positions>
           
            
    )
} 
        </div>
    </div>
  );

}
export default Home;
