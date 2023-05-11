import React,{useState, useEffect} from 'react';
import axios from 'axios';


const addTotalSums = (orders) => {
    const totalSums = [];
  
    return orders.map((order, idx) => {
      const size= order[1];
      if (typeof order[2] !== 'undefined') {
        return order;
      } else {
        const updatedLevel = [ ...order ];
        const totalSum = idx === 0 ? size : size + totalSums[idx - 1];
        updatedLevel[2] = totalSum;
        totalSums.push(totalSum);
        return updatedLevel;
      }
    });
  };
  

const addDepths = (orders, maxTotal) => {
    return orders.map(order => {
      if (typeof order[3] !== 'undefined') {
        return order;
      } else {
        const calculatedTotal = order[2];
        const depth = (calculatedTotal / maxTotal) * 100;
        const updatedOrder = [ ...order ];
        updatedOrder[3] = depth;
        return updatedOrder;
      }
    });
  };


const getMaxTotalSum = (orders)  => {
    const totalSums= orders.map(order => order[2]);
    return parseFloat(Math.max.apply(Math, totalSums));
  }
  

function getDataOrders(setOrders){
    const apiUrl = 'https://fapi.binance.com/fapi/v1/depth?limit=10&symbol=BTCUSDT';
    axios.get(apiUrl).then((resp) => {
        console.log('a', resp.data)
        const all_orders = resp.data;
        // console.log(all_orders);
        // allPersons.bids = allPersons.bids.map(function(each_element){
        //   return Number(each_element.toFixed(2));
        //  })

        // allPersons.asks = allPersons.asks.map(function(each_element){
        //     return Number(each_element.toFixed(2));
        // })

        // console.log(allPersons);
        // console.log(all_orders.asks)
        all_orders.asks = addTotalSums(all_orders.asks.map((each_el) => {
            return [Number(each_el[0]), Number(each_el[1])]
        })).reverse().map((each_el) => {
            return [Number(each_el[0]), Number(each_el[1]), parseFloat(Number(each_el[2]).toFixed(3))]
        });


        let totalSum = getMaxTotalSum(all_orders.asks);
        all_orders.asks = addDepths(all_orders.asks, totalSum);


        // console.log(all_orders.asks)
        all_orders.bids =  addTotalSums(all_orders.bids.map((each_el) => {
            return [Number(each_el[0]), Number(each_el[1])]
        })).map((each_el) => {
            return [Number(each_el[0]), Number(each_el[1]), parseFloat(Number(each_el[2]).toFixed(3))]
        });
        // console.log(all_orders)
        totalSum = getMaxTotalSum(all_orders.bids);
        all_orders.bids = addDepths(all_orders.bids, totalSum);
        
        // console.log(all_orders)
        setOrders(all_orders);
        }
        )
    // return this.all_orders;
}



function TokenOrders(props){
    const [selectStepShow, setSelectStepShow] = useState(false);
    const handleSelectStepToggle = () => setSelectStepShow(!selectStepShow);
    const [selectStepVal, setSelectStepVal] = useState("0.1");

    const [orders, setOrders] = useState({
        "asks": [],
        "bids": []
    });
    

     const {
         tokenMarkPrice, tokenIndexPrice
     } = props;



    useEffect(() => {
        let interval = setInterval(() => {
            getDataOrders(setOrders)
            // console.log("b", orders, getData())
            // orders = orders
                // // orders.bids = orders.bids.map(function(each_element){
                // //     return Number(each_element.toFixed(2));
                // // })
        
                // // orders.asks = orders.asks.map(function(each_element){
                // //     return Number(each_element.toFixed(2));
                // // })})
            
        }, 1000);

        

        return () => {
            clearInterval(interval);
        };
    }, []);

    // var [total_sell] = useState(0);
    // // if (!orders || orders.length === 0) return <p>Нет данных.</p>
    
    return (

  
        <div className="token_orders">
        
        <div className="token_orders_title">
            <div className="token_orders_title_btns">
                <div className="token_orders_title_btn token_orders_title_btn_active">
                    Order Book
                </div>
                <div className="token_orders_title_btn">
                    Recent Trades
                </div>
            </div>
            <div className="token_orders_title_full">
                <img src="img/full.svg" alt=""/>
            </div>
        </div>
        <div className="token_orders_view_types">
            <div className="token_orders_view_types_wrap">
                <div className="token_orders_view_type">
                    <img src="img/view_type1.svg" alt=""/>
                </div>
                <div className="token_orders_view_type">
                    <img src="img/view_type2.svg" alt=""/>
                </div>
                <div className="token_orders_view_type">
                    <img src="img/view_type3.svg" alt=""/>
                </div>
                <div className="token_orders_view_type">
                    <img src="img/view_type4.svg" alt=""/>
                </div>
            </div>
        <div className="token_orders_view_count_w">
           <div onClick={handleSelectStepToggle} className="token_orders_view_count">
                <span>{selectStepVal}</span>
                <img src="img/select2.svg" alt=""/>
            </div> 
            <div onClick={handleSelectStepToggle} className={selectStepShow ? "token_orders_view_count_list " : "token_orders_view_count_list hidden"}>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.1")}>
                    0.1
                </div>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.01")}>
                    0.01
                </div>
                <div className="token_orders_view_count_list_item" onClick={() => setSelectStepVal("0.001")} >
                    0.001
                </div>
            </div>
            </div>
        </div>
        <div className="token_orders_sell">
            <div className="token_orders_sell_title">
                <div className="token_orders_sell_title_price">
                    Price (USDT)
                </div>
                <div className="token_orders_sell_title_quantity">
                    Quantity (BTC)
                </div>
                <div className="token_orders_sell_title_total">
                    Total (BTC)
                </div>
            </div>
            <div className="token_orders_sell_main">
            
                
                        {
                            orders.asks.map((order) =>
                            <div className="row" key={order[0]}>
                                <div className="token_orders_sell_price">
                                    {parseFloat(order[0]).toFixed(2)}
                                </ div>

                                <div className="token_orders_sell_quantity">
                                {parseFloat(order[1]).toFixed(3)}
                                </div>

                                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1)'+ (105 - parseInt(order[3])) + '%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                                    {order[2]}
                                    </div>
                            </div>
                            )
                    
                        }
                    {/* <div className="token_orders_sell_price"> */}
                        {/* 28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 15%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.815
                    </div> */}
                {/* <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        4.928
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 17%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.460
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 20%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.815
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        4.928
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 25%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.460
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 27%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.815
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        4.928
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 32%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.460
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 36%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.815
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        4.928
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 45%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.460
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 60%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.815
                    </div>
                </div>
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        4.928
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 75%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                        7.460
                    </div>
                </div> */}
             </div> 
        </div>
        <div className="token_orders_price">
            <div className="token_orders_price_actual">
                <img src="img/order_up.svg" alt=""/>
                <span>{tokenIndexPrice}</span>
            </div>
            <div className="token_orders_price_for_sell">
                <img src="img/order_flag.svg" alt=""/>
                <span>{tokenMarkPrice}</span>
            </div>
        </div>
        <div className="token_orders_buy_main">

        {
                            orders.bids.map((order) =>
                            <div className="row" key={order[0]}>
                                <div className="token_orders_buy_price">
                                    {parseFloat(order[0]).toFixed(2)}
                                </ div>

                                <div className="token_orders_buy_quantity">
                                {parseFloat(order[1]).toFixed(3)}
                                </div>

                                {/* <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1)'+ (105 - parseInt(order[3])) + '%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
                                    {order[2]}
                                    </div> */}

                                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1)' + (100 - parseInt(order[3])) + '%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                                    {order[2]}
                                    </div>
                            </div>
                            )
                    
                        }
         
        </div>
    </div>
    );
}
export default TokenOrders