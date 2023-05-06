import React,{useState,Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Pnl({pnlShow,setPnlShow}){

    const setPnlShowSet = () => {
        setPnlShow(false);
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className={pnlShow ? "trade_pnl_modal" : "trade_pnl_modal hidden"}>
            <div className="trade_modal_filter"></div>
            <div className="trade_pnl_modal_w">
                <div className="trade_pnl_modal_header">
                    <span>Коэффициент P&L</span>
                    <img onClick={setPnlShowSet} src="img/modal_close3.svg" alt="" />
                </div>
                <div className="trade_pnl_modal_main">
                    <div className="trade_pnl_modal_main_slider">
                        <div className="trade_pnl_modal_main_slider_btn trade_pnl_modal_main_slider_btn_prev">
                     
                        </div>
                        <div className="trade_pnl_modal_main_slider_wrap">
                        <Slider {...settings}>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_plus1.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+50%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_plus2.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p>+70%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_plus3.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-1%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_minus1.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-50%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_minus2.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trade_pnl_modal_main_slider_wrap_slide">
                                <div className="trade_pnl_slide_row">
                                    <div className="trade_pnl_slide_row_left">
                                        <div className="trade_pnl_slide_row_logo">
                                            <img src="img/logo.svg" alt="" />
                                        </div>
                                        <div className="trade_pnl_slide_row_name">
                                            <span>DOGEUSDT</span>
                                            <div className="trade_pnl_slide_row_name_type trade_pnl_slide_row_name_type_short">
                                                Short 21.0x
                                            </div>
                                        </div> 
                                        <div className="trade_pnl_slide_row_pnl">
                                            <span>Нереализ. P&L (USDT)</span>
                                            <p className='color_red'>-70%</p>
                                        </div>
                                        <div className="trade_pnl_slide_row_price">
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Цена входа</span>
                                                <p>0.09211</p>
                                            </div>
                                            <div className="trade_pnl_slide_row_price_column">
                                                <span>Текущая цена</span>
                                                <p>0.09160</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trade_pnl_slide_row_right">
                                        <img src="img/pnl_minus3.png" alt="" />
                                    </div>
                                </div>
                                <div className="trade_pnl_slide_footer">
                                    <div className="trade_pnl_slide_footer_row">
                                        <div className="trade_pnl_slide_footer_row_column">
                                            <span>Присоединяйтесь и получите более $5,000 в бонусах!</span>
                                            <p>Реферальный код: mzrjG</p>
                                        </div>
                                        <div className="trade_pnl_slide_footer_row_qrcode">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>


                        </div>

                        <div className="trade_pnl_modal_main_slider_btn trade_pnl_modal_main_slider_btn_next">
                          
                        </div>
                    </div>

                    <div className="trade_pnl_modal_main_info">
                        <h4>Реферальный код</h4>   
                        <div className="trade_pnl_modal_main_info_refid">
                            <span>mzrjG#1</span>
                            <img src="img/cpy.svg" alt="" />
                        </div> 
                        <div className="trade_pnl_modal_main_info_change_text">
                            <span>Измените текст</span>
                            <textarea name="" id="" cols="30" rows="10" value="Присоединяйтесь к ByFalio вместе со мной 
и получайте бонус на $5000!"></textarea>
                        </div>
                        <div className="trade_pnl_modal_main_info_btns">
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_save.svg" alt="" />
                                </div>
                                <span>Сохранить</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_cpy.svg" alt="" />
                                </div>
                                <span className='posr'>Скопировать</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_mail.svg" alt="" />
                                </div>
                                <span>Отправить</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_twitter.svg" alt="" />
                                </div>
                                <span>Twitter</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_telegram.svg" alt="" />
                                </div>
                                <span>Telegram</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_facebook.svg" alt="" />
                                </div>
                                <span>Facebook</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_whatsapp.svg" alt="" />
                                </div>
                                <span>WhatsApp</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_linkedin.svg" alt="" />
                                </div>
                                <span>LinkedIn</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_line.svg" alt="" />
                                </div>
                                <span>Line</span>
                            </div>
                            <div className="trade_pnl_modal_main_info_btn">
                                <div className="trade_pnl_modal_main_info_btn_img">
                                    <img src="img/btn_more.svg" alt="" />
                                </div>
                                <span>More</span>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Pnl