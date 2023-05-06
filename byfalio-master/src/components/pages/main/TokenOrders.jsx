import React,{useState} from 'react';
function TokenOrders(){
    const [selectStepShow, setSelectStepShow] = useState(false);
    const handleSelectStepToggle = () => setSelectStepShow(!selectStepShow);
    const [selectStepVal, setSelectStepVal] = useState("0.1");

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
                <div className="row">
                    <div className="token_orders_sell_price">
                        28,493.60
                    </div>
                    <div className="token_orders_sell_quantity">
                        0.355
                    </div>
                    <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 15%, rgba(74, 47, 49, 1) 1%)'}} className="token_orders_sell_total">
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
                </div>
            </div>
        </div>
        <div className="token_orders_price">
            <div className="token_orders_price_actual">
                <img src="img/order_up.svg" alt=""/>
                <span>28,492.40</span>
            </div>
            <div className="token_orders_price_for_sell">
                <img src="img/order_flag.svg" alt=""/>
                <span>28,492.40</span>
            </div>
        </div>
        <div className="token_orders_buy_main">
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 20%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    4.928
                </div>
                <div className="token_orders_buy_total" style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 35%, rgba(43,63,59, 1) 1%)'}}>
                    7.460
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 50%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    4.928
                </div>
                <div className="token_orders_buy_total" style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 10%, rgba(43,63,59, 1) 1%)'}}>
                    7.460
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 15%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    4.928
                </div>
                <div className="token_orders_buy_total" style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 60%, rgba(43,63,59, 1) 1%)'}}>
                    7.460
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 20%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    4.928
                </div>
                <div className="token_orders_buy_total" style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 60%, rgba(43,63,59, 1) 1%)'}}>
                    7.460
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    0.355
                </div>
                <div style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 20%, rgba(43,63,59, 1) 1%)'}} className="token_orders_buy_total">
                    7.815
                </div>
            </div>
            <div className="row">
                <div className="token_orders_buy_price">
                    28,493.60
                </div>
                <div className="token_orders_buy_quantity">
                    4.928
                </div>
                <div className="token_orders_buy_total" style={{background: 'linear-gradient(90deg, rgba(33, 35, 41, 1) 60%, rgba(43,63,59, 1) 1%)'}}>
                    7.460
                </div>
            </div>
        </div>
    </div>
    );
}
export default TokenOrders