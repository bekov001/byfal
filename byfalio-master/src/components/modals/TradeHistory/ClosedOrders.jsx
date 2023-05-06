
function ClosedOrders({tradeHistoryClosedShow}){
    return (
        <div className={tradeHistoryClosedShow ? "sidebar_menu_main_history_closed " : "sidebar_menu_main_history_closed hidden"}>
        <div className="history_main_row_w overflow_full">
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <span>XRPUSDT</span>
                    <div className="history_main_row_name_status bg_red">
                        Закрыть Long
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
            <div className="history_main_row">
                <div className="history_main_row_name">
                    <span>XRPUSDT</span>
                    <div className="history_main_row_name_status bg_green">
                        Закрыть Long
                    </div>
                </div>
                <div className="history_main_row_date">
                    <span>2023/04/11 12:55</span>
                    <div className="history_main_row_date_id">
                        <p>af464f03</p>
                        <img src="img/copy.svg" alt=""/>
                    </div>
                </div>
                <div className="history_main_row_stat_ul">
                    <div className="history_main_row_stat_li">
                        <span>Тип ордера</span>
                        <p>Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Всего исполнено</span>
                        <p>25.6 / 25.6</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Цена исполнения / Цена ордера</span>
                        <p>22.396 / Рыночный</p>
                    </div>
                    <div className="history_main_row_stat_li">
                        <span>Статус</span>
                        <p className="color_green">Выполненный</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="history_main_deep_btn">
            Глубокая история
        </div>
    </div>
    );
}
export default ClosedOrders