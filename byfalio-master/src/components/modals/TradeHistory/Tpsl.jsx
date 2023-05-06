import React,{useState} from 'react';
function Tpsl({tpslShow,setTpslShow}){

    const setTpslShowSet = () => {
        setTpslShow(false);
    }
    return (
        <div className={tpslShow ? "trade_modal tpsl_modal " : "trade_modal tpsl_modal hidden"}>
        <div className="trade_modal_filter">

        </div>
        <div className="trade_modal_w">
            <div className="trade_modal_header">
                <span>TP/SL</span>
                <img onClick={setTpslShowSet} src="img/modal_close4.svg" alt=""/>
            </div>
            <div className="trade_modal_main">
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <div className="df">
                            <span>Цена Входа</span>
                            <span className="mla">0.09030</span>
                        </div>
                        <p>TP USDT</p>
                    </div>
                    <div className="df">
                        <div className="trade_modal_main_input_w w70">
                            <input type="text"/>
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
                        <div className="trade_modal_main_select">
                            <div className="trade_modal_main_select_w">
                                <span>USDT</span>
                                <img src="img/select2.svg" alt=""/>
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
                <div className="trade_modal_main_input">
                    <div className="trade_modal_main_input_title">
                        <p>SL USDT</p>
                    </div>
                    <div className="df">
                        <div className="trade_modal_main_input_w w70">
                            <input type="text"/>
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
                        <div className="trade_modal_main_select">
                            <div className="trade_modal_main_select_w">
                                <span>USDT</span>
                                <img src="img/select2.svg" alt=""/>
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

                <div className="trade_modal_main_btns">
                    <div onClick={setTpslShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                        Ок
                    </div>
                    <div onClick={setTpslShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                        Отмена
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Tpsl