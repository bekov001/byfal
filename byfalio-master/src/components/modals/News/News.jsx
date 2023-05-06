import React, { useState} from 'react';



function News({newsShow,handleNewsClose}){
    const [menuLinkId, setMenuLinkId] = useState(1); 
    return (
        <div className={newsShow ? "sidebar_menu_main" : "sidebar_menu_main hidden"} >

            <div className="sidebar_menu_main_news">
                 <div className="sidebar_menu_main_news_head">
                    <span>Новости</span>
                    <img className='sidebar_menu_main_news_head_btn_setting' src="img/setting.svg" alt=""/>
                    <img className='sidebar_menu_main_news_head_btn_close' onClick={handleNewsClose} src="img/close.svg" alt=""/>
                </div>
                <div className="sidebar_menu_main_news_menu">
                    <div onClick={() => setMenuLinkId(1)} className={menuLinkId==1 ? "sidebar_menu_main_news_menu_link sidebar_menu_main_news_menu_active " : "sidebar_menu_main_news_menu_link"}>
                        <div className="sidebar_menu_main_news_menu_link_img">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='news_fill_svg' d="M25 6.25V23.75H5V6.25H25ZM25 3.75H5C3.6125 3.75 2.5 4.8625 2.5 6.25V23.75C2.5 25.1375 3.6125 26.25 5 26.25H25C26.3875 26.25 27.5 25.1375 27.5 23.75V6.25C27.5 4.8625 26.3875 3.75 25 3.75ZM22.5 18.75H7.5V21.25H22.5V18.75ZM12.5 8.75H7.5V16.25H12.5V8.75ZM15 11.25H22.5V8.75H15V11.25ZM22.5 13.75H15V16.25H22.5V13.75Z" fill="#EB7341"/>
                            </svg>
                        </div>
                        <div className="sidebar_menu_main_news_menu_link_border"></div>
                    </div>
                    <div onClick={() => setMenuLinkId(2)} className={menuLinkId==2 ? "sidebar_menu_main_news_menu_link sidebar_menu_main_news_menu_active " : "sidebar_menu_main_news_menu_link"} >
                        <div className="sidebar_menu_main_news_menu_link_img">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 13C1.75 14.4774 2.04099 15.9403 2.60636 17.3052C3.17172 18.6701 4.00039 19.9103 5.04505 20.955C6.08971 21.9996 7.3299 22.8283 8.69481 23.3936C10.0597 23.959 11.5226 24.25 13 24.25C14.4774 24.25 15.9403 23.959 17.3052 23.3936C18.6701 22.8283 19.9103 21.9996 20.955 20.955C21.9996 19.9103 22.8283 18.6701 23.3936 17.3052C23.959 15.9403 24.25 14.4774 24.25 13C24.25 11.5226 23.959 10.0597 23.3936 8.69481C22.8283 7.3299 21.9996 6.08971 20.955 5.04505C19.9103 4.00039 18.6701 3.17172 17.3052 2.60636C15.9403 2.04099 14.4774 1.75 13 1.75C11.5226 1.75 10.0597 2.04099 8.69481 2.60636C7.3299 3.17172 6.08971 4.00039 5.04505 5.04505C4.00039 6.08971 3.17172 7.3299 2.60636 8.69481C2.04099 10.0597 1.75 11.5226 1.75 13Z" stroke="#90919B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path className='news_fill_svg' d="M16.5 9.25C16.2736 8.8572 15.9446 8.53338 15.5482 8.31319C15.1519 8.093 14.7031 7.98474 14.25 8H11.75C11.087 8 10.4511 8.26339 9.98223 8.73223C9.51339 9.20107 9.25 9.83696 9.25 10.5C9.25 11.163 9.51339 11.7989 9.98223 12.2678C10.4511 12.7366 11.087 13 11.75 13H14.25C14.913 13 15.5489 13.2634 16.0178 13.7322C16.4866 14.2011 16.75 14.837 16.75 15.5C16.75 16.163 16.4866 16.7989 16.0178 17.2678C15.5489 17.7366 14.913 18 14.25 18H11.75C11.2969 18.0153 10.8481 17.907 10.4518 17.6868C10.0554 17.4666 9.72644 17.1428 9.5 16.75M13 6.75V19.25" stroke="#90919B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div className="sidebar_menu_main_news_menu_link_border"></div>
                    </div>
                    <div onClick={() => setMenuLinkId(3)} className={menuLinkId==3 ? "sidebar_menu_main_news_menu_link sidebar_menu_main_news_menu_active " : "sidebar_menu_main_news_menu_link"}>
                        <div className="sidebar_menu_main_news_menu_link_img br0">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='news_fill_svg' d="M15 25C9.5 25 5 20.5 5 15C5 9.5 9.5 5 15 5C20.5 5 25 9.5 25 15C25 20.5 20.5 25 15 25ZM15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM13.75 17.5H16.25V21.25H20V15H22.5L15 8.75L7.5 15H10V21.25H13.75V17.5Z" fill="#90919B"/>
                            </svg>
                        </div>
                        <div className="sidebar_menu_main_news_menu_link_border"></div>
                    </div>
                </div>

                <div className="sidebar_menu_main_news_items">
                    <div className="sidebar_menu_main_news_item">
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                        </span>
                        <img src="img/newsImg.png" alt="" />
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                        </span>
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                        </span>
                        <img src="img/newsImg.png" alt="" />
                    </div>
                    <div className="sidebar_menu_main_news_item">
                        <span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                        </span>
                        <img src="img/newsImg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default News