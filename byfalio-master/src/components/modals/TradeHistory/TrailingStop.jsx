import React,{useState} from 'react';
function TrailingStop({trailingStopShow,setTrailingStopShow}){

    const setTrailingStopShowSet = () => {
        setTrailingStopShow(false);
    }
    return (
        <div className={trailingStopShow ? "trade_modal trailing_stop_modal " : "trade_modal trailing_stop_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Трейлинг стоп</span>
                    <img onClick={setTrailingStopShowSet} src="img/modal_close4.svg" alt=""/>
                </div>
                <div className="trade_modal_main">
                    <div className="trade_modal_main_input">
                        <div className="trade_modal_main_input_title">
                            Снижение цены
                        </div>
                        <div className="trade_modal_main_input_w">
                            <input type="text" value=""/>
                            <div className="trade_modal_main_input_btns">
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
                    <div className="trade_modal_main_text_info">
                        Ордер Stop Loss сработает, когда цена последней сделки откатится от лучшей цены на 0.0.
                    </div>
                    <div className="trade_modal_main_btns">
                        <div onClick={setTrailingStopShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                            Ок
                        </div>
                        <div onClick={setTrailingStopShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                            Отмена
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TrailingStop