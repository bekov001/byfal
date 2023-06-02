function TokenHeader({handleTokenSearchShow,tokenSearchShow,handleTokenSearchClose, tokenPrice, tickerData, fundRate}){
    return (
        <div className="token_header">
        <div className="token_header_menu">
            <img onClick={handleTokenSearchShow} className="token_header_menu_btn" src="img/menu.svg" alt=""/>
            <div className={tokenSearchShow ? "token_search_modal " : "token_search_modal hidden"}>
                <div className="token_search_modal_header">
                    <div className="token_search_modal_links">
                        <div className="token_search_modal_link token_search_modal_link_all">
                            Все
                        </div>
                        <div className="token_search_modal_link token_search_modal_link_favorite">
                            <img src="img/star.svg" alt=""/>
                            <span>Избранное</span>
                        </div>
                    </div>
                    <div onClick={handleTokenSearchClose} className="token_search_modal_close">
                        <img src="img/modal_close.svg" alt=""/>
                    </div>
                </div>
                <div className="token_search_modal_main">
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            {tokenPrice}
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            {tickerData.priceChangePercent}
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                    <div className="token_search_modal_main_row">
                        <div className="token_search_modal_main_row_add_favorite">
                            <img src="img/star_unactive.svg" alt=""/>
                        </div>
                        <div className="token_search_modal_main_row_name">
                            <img src="img/btc.svg" alt=""/>
                            <span>BTSUSDT</span>
                        </div>
                        <div className="token_search_modal_main_row_price">
                            27,818.00
                        </div>
                        <div className="token_search_modal_main_row_price_change color_red">
                            -1.89%
                        </div>
                        <div className="token_search_modal_main_row_supply">
                            578.92M(USD)
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="token_header_info">
            <div className="token_header_info_img">
                <img src="img/btc.svg" alt=""/>
            </div>
            <div className="token_header_info_wrap">
                <div className="token_header_info_wrap_w">
                    <div className="token_header_info_name">
                        BTSUSDT
                        <div className="token_header_info_popup">
                            <img src="img/info_popup.svg" alt=""/>
                        </div>
                    </div>
                    <div className="token_header_info_trade tables_hidden">
                        Бессрочный USDT
                    </div>
                </div> 
                <div className="token_header_stat tables_show">
                    <h5 className="tables_show">{tokenPrice}</h5>
                    <p className="color_green">+1,79%</p>
                </div>
            </div>
        </div>
        <div className="token_header_price tables_hidden">
            {tokenPrice}
        </div>

        <div className="token_header_stat tables_hidden">
            <span className="">Изменение за 24ч</span>
            <p className="color_green"> {tickerData.priceChangePercent}%</p>
        </div>
        <div className="token_header_stat tables_hidden">
            <span>Максимум за 24ч</span>
            <p>{tickerData.highPrice}</p>
        </div>
        <div className="token_header_stat tables_hidden">
            <span>Минимум за 24ч</span>
            <p>{tickerData.lowPrice}</p>
        </div>
        <div className="token_header_stat tables_hidden">
            <span>Оборот за 24ч (BTC)</span>
            <p>{tickerData.volume}</p>
        </div>
        <div className="token_header_stat tables_hidden">
            <span>Ставка / Отсчет</span>
            <div className="row">
                <p className="color_red">{fundRate.fundingRate}% </p>
                <p>/ 07:47:58</p>
            </div>
        </div>

        <div className="token_header_btns tables_show">
            <div className="token_header_btn">
                <img src="img/chart.svg" alt="" />
                <span>График</span>
            </div>
            <div className="token_header_btn token_header_btn_active">
                <img src="img/stakan.svg" alt="" />
                <span>Стакан</span>
            </div>
        </div>
    </div>
    );
}
export default TokenHeader