import { Link } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import AuthContext from "../../shared/AuthContext";


function Header({handleNotificationShow}){

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
      }
    }, [isAuth]);

    const { user } = useContext(AuthContext);

    return (
        <header>
            <div className="logo">
                <Link to='/'><img src="img/logo.svg" alt=""/></Link>
            
            </div>

            {user && (<div className="btn_add_balance">
                Пополнить баланс
            </div>)}
            
            <div className="overview_active">
                <div className="overview_active_text">
                    Обзор активов
                    <div className="hide_balance"></div>
                </div>
                <div className="overview_active_balance">
                    <div className="overview_active_balance_usdt">
                        986.41 USDT
                    </div>
                    <div className="overview_active_balance_btc">
                        ≈ 0.03526827 BTC
                    </div>
                </div>
            </div>
            <div className="header_btns">
                <div className="hbp header_btn_profile">
                    <Link to="/account"><img className="hbp_btn" src="img/profile.svg" alt=""/></Link>  
                </div>
                <div className="hbp header_btn_notice" onClick={handleNotificationShow}>
                    <img className="hbp_btn" src="img/notice.svg" alt=""/>
                    <div className="notice_new">
                        2
                    </div>

                    <div className="notification_modal hidden" >
                        <div className="notification_modal_wrap">
                            <div className="notification_modal_close">
                                <img src="img/modal_close2.svg" alt=""/>
                            </div>
                            <div className="notification_modal_items">
                                <div className="notification_modal_item">
                                    <div className="notification_modal_item_title">
                                        <div className="notification_modal_item_title_star">
                                            <img src="img/star.svg" alt=""/>
                                        </div>
                                        <span>Торгуй со среды на пятницу токенами P2E - разыгрываем 300USDT</span>
                                    </div>
                                    <div className="notification_modal_item_body">
                                        <div className="notification_modal_item_body_left">
                                            <span>Всего 48 часов,чтобы торговать токенами Р2Е и принять участие в торговых задачах с призовым фондом 300 USDT</span>
                                            <div className="df">
                                                <div className="notification_modal_item_body_left_time">
                                                    Вчера 14:40
                                                </div>
                                                <div className="notification_modal_item_body_left_category">
                                                    Последние события
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notification_modal_item_body_right">
                                            <img src="img/notification_image.png" alt=""/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="hbp header_btn_lang">
                    <img className="hbp_btn" src="img/lang.svg" alt=""/>
                </div>
                <div className="hbp header_btn_change_theme">
                    <img className="hbp_btn" src="img/change_theme.svg" alt=""/>
                </div>
            </div>
        </header>
    );
}
export default Header