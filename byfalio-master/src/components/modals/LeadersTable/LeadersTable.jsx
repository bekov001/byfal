import React, { useState} from 'react';


function LeadersTable({leadersShow,handleLeadersClose}){

    return (
        <div className={leadersShow ? "sidebar_menu_main w700" : "sidebar_menu_main w700 hidden"} >
            <div className="sidebar_menu_main_leaders">
                    <div className="sidebar_menu_main_leaders_head">
                        <div className="df">
                           <span>Лидеры недели</span> 
                           <img src="img/question.svg" alt="" />
                        </div>
                    
                        <img className='sidebar_menu_main_leaders_head_btn_close' onClick={handleLeadersClose} src="img/close.svg" alt=""/>
                    </div>
                    <div className="sidebar_menu_main_leaders_head_border"></div>
                    <div className="sidebar_menu_main_leaders_items">
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position1.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>20,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position2.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/po.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>15,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <img src="img/position3.svg" alt="" />
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/da.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>10,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>4</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/kz.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>9,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>5</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/uk.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>Ожидаемая прибыль </span>
                                <h5>9,000</h5>
                            </div>
                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>6</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/ua.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>7</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/po.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>8</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/da.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>9</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/kz.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>10</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/uk.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>7</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/po.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>8</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/da.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                            <span>9</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/kz.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                        <div className="sidebar_menu_main_leaders_item">
                            <div className="sidebar_menu_main_leaders_item_position">
                                <span>10</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_item_flag_id">
                                <img src="img/flags/uk.svg" alt="" />
                                <span>12345678</span>
                            </div>
                            <div className="sidebar_menu_main_leaders_column">
                                <span>ROI</span>
                                <p className='color_green'>+3,690.61%</p>
                            </div>
                            <div className="sidebar_menu_main_leaders_column mobile_hidden">
                                <span>Еженедельный PLN (USD) </span>
                                <p className='color_red'>-3,690.61</p>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
}
export default LeadersTable