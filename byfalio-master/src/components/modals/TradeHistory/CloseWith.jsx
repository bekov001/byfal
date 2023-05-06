import React,{useState} from 'react';
function CloseWith({closeWithShow,setCloseWithShow}){

    const [closeWithMarketShow, setCloseWithMarket] = useState(true);

    const setCloseWithShowSet = () => {
        setCloseWithShow(false);
    }
    return (
        <div className={closeWithShow ? "trade_modal close_with_modal " : "trade_modal close_with_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Закрыть с помощью</span>
                    <img onClick={setCloseWithShowSet} src="img/modal_close4.svg" alt=""/>
                </div>

                <div className="trade_modal_header_btns">
                    <div onClick={() => setCloseWithMarket(true)} className={closeWithMarketShow ? "trade_modal_header_btn trade_modal_header_btn_market trade_modal_header_btn_active " : "trade_modal_header_btn trade_modal_header_btn_market"}>
                        Рыночный
                    </div>
                    <div onClick={() => setCloseWithMarket(false)} className={closeWithMarketShow ? "trade_modal_header_btn trade_modal_header_btn_market " : "trade_modal_header_btn trade_modal_header_btn_market trade_modal_header_btn_active"} >
                        Лимитная цена
                    </div>
                </div>
                <div className={closeWithMarketShow ? "trade_modal_main trade_modal_main_hidden " : "trade_modal_main trade_modal_main_active"}>
                    <div className="trade_modal_main_market">
                        <div className="trade_modal_main_price">
                            <div className="trade_modal_main_price_row">
                                <span>Цена входа</span>
                                <p>29,209.89</p>
                            </div>
                            <div className="trade_modal_main_price_row">
                                <span>Рыноч. цена</span>
                                <p>28,881.4</p>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                                <input className="iw100" type="text" value="13"/>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Цена закрытия
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
                            Ожидаемый убытки составляют: 68.6970 USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div onClick={setCloseWithShowSet} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Подтвердить
                        </div>

                    </div>
                </div>

                <div className={closeWithMarketShow ? "trade_modal_main trade_modal_main_active " : "trade_modal_main trade_modal_main_hidden"}>
                    <div className="trade_modal_main_market">
                        <div className="trade_modal_main_price">
                            <div className="trade_modal_main_price_row">
                                <span>Цена входа</span>
                                <p>29,209.89</p>
                            </div>
                            <div className="trade_modal_main_price_row">
                                <span>Рыноч. цена</span>
                                <p>28,881.4</p>
                            </div>
                        </div>
                        <div className="trade_modal_main_input trade_modal_mtstandart">
                            <div className="trade_modal_main_input_title">
                                Кол-во
                            </div>
                            <div className="trade_modal_main_input_w">
                                <input className="iw100" type="text" value="13"/>
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
                            Ожидаемый убытки составляют: 68.6970 USDT (Включая расчетную комисиию за закрытие)
                        </div>

                        <div onClick={setCloseWithShowSet} className="trade_modal_main_btn_full trade_modal_main_btn_full_mt">
                            Подтвердить
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default CloseWith