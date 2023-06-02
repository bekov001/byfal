import News from "../modals/News/News";
import TradeHistory from "../modals/TradeHistory/TradeHistory";
import LeadersTable from "../modals/LeadersTable/LeadersTable";

import React, { useState} from 'react';
import Profile from "../pages/authentication/profile/Profile";
import { Link } from "react-router-dom";
function Sidebar(){

    const [menuLinkId, setMenuLinkId] = useState(4); 
    const hideAll = () => {
        handleTradeHistoryClose();
        handleNewsClose();
        handleLeadersClose();
    } 

    const [tradeHistoryShow, setTradeHistoryShow] = useState(false);

    const handleTradeHistoryShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(2);
        setTradeHistoryShow(true);
    }

    const handleProfile = (e) => {

        e.preventDefault();
        setMenuLinkId(1);

    }

    const handleTradeHistoryClose = () => {
        setTradeHistoryShow(false);
        setMenuLinkId(4);
    }

    const [newsShow, setNewsShow] = useState(false);

    const handleNewsShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(3);
        setNewsShow(true);
    }

    const handleNewsClose = () => {
        setNewsShow(false);
        setMenuLinkId(4);
    }


    const handleTradeRoomShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(4);
    }

    const [leadersShow, setLeadersShow] = useState(false);

    const handleLeadersShow = (e) => {
        hideAll();
        e.preventDefault();
        setMenuLinkId(5);
        setLeadersShow(true);
    }

    const handleLeadersClose = () => {
        setLeadersShow(false);
        setMenuLinkId(4);
    }


    return (
        <div className={menuLinkId!=4 ? "sidebar_menu sidebar_menu_active" : "sidebar_menu"} >
        <div className="sidebar_menu_links">
        {menuLinkId!=4 ? <div className='trade_modal_filter'></div> : ""}   
        {/* <div className={menuLinkId!=4 ? "trade_modal_filter" : ""}></div> */}

            <div className="sidebar_menu_link tables_hidden">
                
                <a href="">
                <Link to="/profile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_302_1300)">
                        <path d="M15 6.5C14.448 6.5 14 6.052 14 5.5V4H10V5.5C10 6.052 9.552 6.5 9 6.5C8.448 6.5 8 6.052 8 5.5V4C8 2.897 8.897 2 10 2H14C15.103 2 16 2.897 16 4V5.5C16 6.052 15.552 6.5 15 6.5Z" fill="#ACACB8"/>
                        <path d="M12.71 15.3801C12.53 15.4501 12.27 15.5001 12 15.5001C11.73 15.5001 11.47 15.4501 11.23 15.3601L0 11.6201V19.2501C0 20.7701 1.23 22.0001 2.75 22.0001H21.25C22.77 22.0001 24 20.7701 24 19.2501V11.6201L12.71 15.3801Z" fill="#ACACB8"/>
                        <path d="M24 7.75V10.04L12.24 13.96C12.16 13.99 12.08 14 12 14C11.92 14 11.84 13.99 11.76 13.96L0 10.04V7.75C0 6.23 1.23 5 2.75 5H21.25C22.77 5 24 6.23 24 7.75Z" fill="#ACACB8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_302_1300">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    <span>Профиль</span>
                    </Link>
                </a>
               
            </div>
            <div className={menuLinkId==2 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"}>
                <div className="border_active"></div>
                <a href="" onClick={handleTradeHistoryShow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_302_1305)">
                        <path d="M12 0.0512695C9.34507 0.0512695 6.82291 0.912082 4.75057 2.50049V2.15989C4.75057 1.77172 4.4359 1.457 4.04768 1.457C3.65946 1.457 3.34479 1.77168 3.34479 2.15989V4.04872C3.34479 4.67675 4.10365 4.98393 4.54376 4.54654C4.60708 4.50435 7.26621 1.457 11.9999 1.457C17.8134 1.457 22.543 6.1866 22.543 12C22.543 17.8135 17.8134 22.5431 12 22.5431C6.18654 22.5431 1.45694 17.8135 1.45694 12C1.45694 10.3822 1.81347 8.83049 2.51655 7.38791C2.68666 7.03893 2.54163 6.61818 2.19269 6.44816C1.84371 6.27791 1.42296 6.42304 1.25294 6.77202C0.455552 8.4081 0.0512085 10.167 0.0512085 12C0.0512085 18.6038 5.39529 23.9488 12 23.9488C18.6038 23.9488 23.9487 18.6047 23.9487 12C23.9487 5.39624 18.6047 0.0512695 12 0.0512695Z" fill="#ACACB8"/>
                        <path d="M12 20.4345C16.6507 20.4345 20.4344 16.6508 20.4344 12.0001C20.4344 7.34938 16.6507 3.56567 12 3.56567C7.34921 3.56567 3.56555 7.34933 3.56555 12.0001C3.56555 16.6508 7.34921 20.4345 12 20.4345ZM8.04657 14.2627L11.2971 11.6623V7.78288C11.2971 7.39471 11.6118 7.07999 12 7.07999C12.3882 7.07999 12.7029 7.39466 12.7029 7.78288V12.0001C12.7029 12.2136 12.6058 12.4155 12.4391 12.5489L8.92472 15.3604C8.62299 15.6019 8.18035 15.5551 7.93683 15.2506C7.6943 14.9475 7.74343 14.5052 8.04657 14.2627Z" fill="#ACACB8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_302_1305">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    <span>История <br/> торговли</span>
                </a>
            </div>
            <div className={menuLinkId==3 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"} >
                <div className="border_active"></div>
                <a href="" onClick={handleNewsShow} >
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0.5H3C1.7595 0.5 0.75 1.5095 0.75 2.75V14.75C0.75 15.9905 1.7595 17 3 17H5.25V20.75C5.25 21.0387 5.41575 21.3005 5.6745 21.4257C5.77875 21.4753 5.88975 21.5 6 21.5C6.16725 21.5 6.333 21.4445 6.46875 21.3358L11.8883 17H21C22.2405 17 23.25 15.9905 23.25 14.75V2.75C23.25 1.5095 22.2405 0.5 21 0.5ZM12 11H6C5.58525 11 5.25 10.664 5.25 10.25C5.25 9.836 5.58525 9.5 6 9.5H12C12.4148 9.5 12.75 9.836 12.75 10.25C12.75 10.664 12.4148 11 12 11ZM18 8H6C5.58525 8 5.25 7.664 5.25 7.25C5.25 6.836 5.58525 6.5 6 6.5H18C18.4147 6.5 18.75 6.836 18.75 7.25C18.75 7.664 18.4147 8 18 8Z" fill="#ACACB8"/>
                        </svg>
                    <span>Новости <br/> рынка</span>
                </a>
            </div>
            <div className={menuLinkId==4 ? "sidebar_menu_link menu_link_active trade_room_link" : "sidebar_menu_link trade_room_link"}>
           
            
                <div className="border_active">
                    
                </div>
                
                    <a onClick={handleTradeRoomShow}  href="">
                        <Link to="/register">
                        <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.44998 30.24H10.225V18.9H21.775V30.24H27.55V13.23L16 4.725L4.44998 13.23V30.24ZM0.599976 34.02V11.34L16 0L31.4 11.34V34.02H17.925V22.68H14.075V34.02H0.599976Z" fill="#90919B"/>
                            </svg>

                        <span>Trade room</span>
                        </Link>
                    </a>
                    
                </div>
           
          
            <div className={menuLinkId==5 ? "sidebar_menu_link menu_link_active" : "sidebar_menu_link"} >
            <div className="border_active"></div>
                <a onClick={handleLeadersShow} href="">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.95 1.07002H16.8V0.0200195H4.2V1.07002H1.05C0.42 1.07002 0 1.49002 0 2.12002V4.64002C0 7.05502 1.785 9.05002 4.2 9.36502V9.47002C4.2 12.515 6.3 15.035 9.135 15.665L8.4 17.87H5.985C5.565 17.87 5.145 18.185 5.04 18.605L4.2 21.02H16.8L15.96 18.605C15.855 18.185 15.435 17.87 15.015 17.87H12.6L11.865 15.665C14.7 15.035 16.8 12.515 16.8 9.47002V9.36502C19.215 9.05002 21 7.05502 21 4.64002V2.12002C21 1.49002 20.58 1.07002 19.95 1.07002ZM4.2 7.26502C3.045 6.95002 2.1 5.90002 2.1 4.64002V3.17002H4.2V7.26502ZM12.6 10.52L10.5 9.36502L8.4 10.52L8.925 8.42002L7.35 6.32002H9.555L10.5 4.22002L11.445 6.32002H13.65L12.075 8.42002L12.6 10.52ZM18.9 4.64002C18.9 5.90002 17.955 7.05502 16.8 7.26502V3.17002H18.9V4.64002Z" fill="#ACACB8"/>
                        </svg>

                    <span>Таблица <br/> лидеров</span>
                </a>
            </div>
            <div className="sidebar_menu_link">
                <a href="">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_302_1324)">
                        <path d="M10.3639 24.014C4.94201 23.3361 0.682773 19.0769 0.00565545 13.6564C-0.047415 13.2376 0.279775 12.866 0.703401 12.866H3.54586C3.88922 12.866 4.18177 13.1139 4.23948 13.4518C4.78612 16.6891 7.32915 19.2328 10.5686 19.7801C10.9064 19.8378 11.1543 20.1304 11.1543 20.4738V23.3162C11.1543 23.7344 10.7917 24.0649 10.3639 24.014Z" fill="#ACACB8"/>
                        <path d="M3.54604 11.272H0.703579C0.279718 11.272 -0.0471904 10.9001 0.00583322 10.4815C0.750273 4.51775 5.84598 0.0202637 11.8578 0.0202637C14.5285 0.0202637 17.0606 0.891051 19.1805 2.53858C19.5177 2.80164 19.543 3.29488 19.2465 3.59136L17.2371 5.60148C16.9939 5.84526 16.6121 5.8755 16.3319 5.677C15.0126 4.73683 13.4654 4.23965 11.8577 4.23965C8.07442 4.23965 4.87003 6.95093 4.23961 10.6862C4.18195 11.024 3.8894 11.272 3.54604 11.272Z" fill="#ACACB8"/>
                        <path d="M12.7483 23.3169V20.4744C12.7483 20.1311 12.9962 19.8385 13.3341 19.7808C17.0693 19.1504 19.7806 15.946 19.7806 12.1627C19.7806 10.555 19.2834 9.0078 18.3432 7.68854C18.1441 7.40903 18.1757 7.02581 18.4188 6.78338L20.4289 4.77397C20.7216 4.48129 21.2164 4.49985 21.4817 4.83989C23.1292 6.9599 24 9.49195 24 12.1627C24 18.1745 19.5024 23.2702 13.5387 24.0146C13.1062 24.0662 12.7483 23.7303 12.7483 23.3169Z" fill="#ACACB8"/>
                        <path d="M10 9.20933C10 8.82096 9.77613 8.5061 9.5 8.5061H8.5C8.22387 8.5061 8 8.82096 8 9.20933V14.8352C8 15.2236 8.22387 15.5384 8.5 15.5384H9.5C9.77613 15.5384 10 15.2236 10 14.8352V9.20933Z" fill="#ACACB8"/>
                        <path d="M13 14.8351V7.80284C13 7.41447 12.7761 7.09961 12.5 7.09961H11.5C11.2239 7.09961 11 7.41447 11 7.80284V14.8351C11 15.2235 11.2239 15.5384 11.5 15.5384H12.5C12.7762 15.5384 13 15.2235 13 14.8351Z" fill="#ACACB8"/>
                        <path d="M16 14.8352V12.0223C16 11.634 15.7761 11.3191 15.5 11.3191H14.5C14.2239 11.3191 14 11.634 14 12.0223V14.8352C14 15.2236 14.2239 15.5385 14.5 15.5385H15.5C15.7762 15.5385 16 15.2236 16 14.8352Z" fill="#ACACB8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_302_1324">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.0200195)"/>
                        </clipPath>
                        </defs>
                        </svg>

                    <span>Статистика</span>
                </a>
            </div>
        </div>
            <TradeHistory tradeHistoryShow={tradeHistoryShow} handleTradeHistoryClose={handleTradeHistoryClose}></TradeHistory>
            <News newsShow={newsShow} handleNewsClose={handleNewsClose}></News>
            <LeadersTable leadersShow={leadersShow} handleLeadersClose={handleLeadersClose} ></LeadersTable>
    </div>
    );
}
export default Sidebar