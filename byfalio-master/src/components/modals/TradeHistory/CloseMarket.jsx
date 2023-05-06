import React,{useState} from 'react';
function CloseMarket({closeMarketShow,setCloseMarketShow}){

    const setCloseMarketShowSet = () => {
        setCloseMarketShow(false);
    }
    return (
        <div className={closeMarketShow ? "trade_modal close_market_modal " : "trade_modal close_market_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Закр. по Рыноч-му</span>
                    <img onClick={setCloseMarketShowSet} src="img/modal_close.svg" alt=""/>
                </div>
                <div className="trade_modal_main">
                    <div className="trade_modal_main_input">
                        <div className="trade_modal_main_input_title">
                            Закр. Кол-во DOGE
                        </div>
                        <div className="trade_modal_main_input_w">
                            <input type="text"/>
                            <div className="trade_modal_main_input_btns">
                                <div className="trade_modal_main_input_btn_clear">
                                    <img src="img/clear.svg" alt=""/>
                                </div>
                                <div className="df">
                                    <div className="trade_modal_main_input_btn_plus">
                                        +
                                    </div>
                                    <span>|</span>
                                    <div className="trade_modal_main_input_btn_minus">
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trade_modal_main_procent">
                        <div className="trade_modal_main_procent_item">
                            10%
                        </div>
                        <div className="trade_modal_main_procent_item">
                            25%
                        </div>
                        <div className="trade_modal_main_procent_item">
                            50%
                        </div>
                        <div className="trade_modal_main_procent_item">
                            75%
                        </div>
                        <div className="trade_modal_main_procent_item">
                            100%
                        </div>
                    </div>
                    <div className="trade_modal_main_text_info">
                        19 контракт(ов) будет закрыто по цене Рыноч. Цена. Ожидаемые Убытки составит 0.0063 USDT. (включая расчетную комиссию за закрытие)
                    </div>
                    <div className="trade_modal_main_btns">
                        <div onClick={setCloseMarketShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                            Ок
                        </div>
                        <div onClick={setCloseMarketShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                            Отмена
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CloseMarket