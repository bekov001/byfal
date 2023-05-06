import React,{useState} from 'react';
import Select from "react-select";

function TokenBuy(){
    const [priceOrder, setPriceOrder] = useState(28160);
    const priceOrderChange = event => {
        setPriceOrder(event.target.value);
      };
    const [isCheckedShort, setIsCheckedShort] = useState(false);
    const handleIsCheckedShortToggle = () => setIsCheckedShort(!isCheckedShort);

    const [isCheckedLong, setIsCheckedLong] = useState(false);
    const handleIsCheckedLongToggle = () => setIsCheckedLong(!isCheckedLong);

    const options = [
        { value: "10.00x", label: "Марж. торговля", customMarj: "10.00x" },
        { value: "14.00x", label: "Марж. торговля", customMarj: "14.00x" },
        { value: "15.00x", label: "Марж. торговля", customMarj: "15.00x" },
        { value: "25.00x", label: "Марж. торговля", customMarj: "25.00x" },
      ];
      const formatOptionLabel = ({ value, label, customMarj }) => (
        <div className='token_buy_select_marj_text' style={{ display: "flex" }}>
          <span>{label}</span>
          <p className="color_green">{customMarj}</p>
        </div>
      );
      const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: "#fff",
          backgroundColor: state.isSelected ? "#212329" : "#303B47",
          border: "none",
          cursor:"pointer"
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          background: "#303B47",
          borderRadius: "20px",
          border: "none",
          minHeight: "auto",
          width:"auto",
          boxShadow: "none",
          padding: "0",
          margin: "0",
          cursor:"pointer"
        }),
        valueContainer: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: "0",
            margin: "0",
            paddingLeft: "10px"
          }),
          menuList: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: "0",
            margin: "0",
            borderRadius: "10px"
          }),
          dropdownIndicator: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: "3px",
            cursor: "pointer",
          }),
          indicatorSeparator: (defaultStyles, state) => ({
            ...defaultStyles,
            width: "0px",
          }),
          menu: (defaultStyles, state) => ({
            ...defaultStyles,
            borderRadius: "10px",
            background: "#303B47",
          }),
          
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };

      const [priceCount, setPriceCount] = useState(0);
      const priceCountChange = event => {
        setPriceCount(event.target.value);
      };



    return (
        <div className="token_buy">
        <div className="token_buy_select_marj">
            <Select isSearchable={false} defaultValue={options[0]} formatOptionLabel={formatOptionLabel} options={options} styles={customStyles} />
        </div>
        <div className="token_buy_btns">
            <div className="token_buy_btn token_buy_btn_limit">
                Лимитный
            </div>
            <div className="token_buy_btn token_buy_btn_market">
                Рыночный
            </div>
        </div>
        <div className="token_buy_price">
            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_name">
                    Цена ордера
                </div>
                <div className="token_buy_price_input">
                    <input type="text" onChange={priceOrderChange} value={priceOrder}/>
                    <div className="token_buy_price_input_row">
                        <span className="color_green">Последняя</span>
                        <p>
                            <t onClick={() => setPriceOrder(priceOrder+1)} >+</t>
                            /
                           <t onClick={() => setPriceOrder(priceOrder-1)} >-</t>
                        </p>
                    </div>
                </div>
            </div>
            <div className="token_buy_price_input_w">
                <div className="token_buy_price_input_select">
                    <div className="token_buy_price_input_select_w">
                        <span>Заполнить по кол-ву</span>
                        <img src="img/select2.svg" alt=""/> 
                    </div>
                </div>
                <div className="token_buy_price_input">
                    <input className="input_width_large" onChange={priceCountChange} type="text" value={priceCount}/>
                    <div className="token_buy_price_input_text">
                        BTC
                    </div>
                </div>
            </div>
            <div className="token_buy_price_option">
                <div className="token_buy_price_option_item">
                    10%
                </div>
                <div className="token_buy_price_option_item">
                    25%
                </div>
                <div className="token_buy_price_option_item">
                    50%
                </div>
                <div className="token_buy_price_option_item">
                    75%
                </div>
                <div className="token_buy_price_option_item">
                    100%
                </div>
            </div>
        </div>
        <div className="token_buy_btns_w">
            <div className="token_buy_btn_w token_buy_btn_long">
                <img src="img/arrow_up.svg" alt=""/>
                <span>Long</span>
            </div>
            <div className="token_buy_btn_w token_buy_btn_short">
                <img src="img/arrow_down.svg" alt=""/>
                <span>Short</span>
            </div>
        </div>
        <div className="token_buy_result">
            <div className="token_buy_result_row">
                <span>Стоим.</span>
                <div className="token_buy_result_info">
                    <span className="color_green">_ _</span> / <span className="color_red">_ _</span> USDT
                </div>
            </div>
            <div className="token_buy_result_row mb0">
                <span>Стоим.</span>
                <div className="token_buy_result_info">
                    <span className="color_green">_ _</span> / <span className="color_red">_ _</span> USDT
                </div>
            </div>
        </div>

        <div className="token_buy_option">
            <div className="token_buy_option_item">
            <div onClick={handleIsCheckedLongToggle} className={isCheckedLong ? "token_buy_option_item_checkbox checked" : "token_buy_option_item_checkbox"}></div>
                <label for="buy1">Купить Лонг с ТP/SL</label>
            </div>
            <div className="token_buy_option_item mb0">
                <div onClick={handleIsCheckedShortToggle} className={isCheckedShort ? "token_buy_option_item_checkbox checked" : "token_buy_option_item_checkbox"}></div>
                <label for="buy2">Продать Шорт с ТP/SL</label>
            </div>
        </div>
    </div>
    );
}
export default TokenBuy