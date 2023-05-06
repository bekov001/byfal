import React,{useState} from 'react';
import Slider from '@mui/material/Slider';

function CrossMargin({crossMarginShow,setCrossMarginShow}){

    const setCrossMarginShowSet = () => {
        setCrossMarginShow(false);
    }
    const marks = [
        {
          value: 1,
          label: '1x',
        },
        {
          value: 3,

        },
        {
          value: 5,
  
        },
        {
            value: 10,
            label: '10x',
          },
          {
            value: 25,
            label: '25x',
          },
          {
            value: 50,
            label: '50x',
          },
        {
          value: 100,
          label: '100',
        },
      ];
      const [value, setValue] = useState(0);
      function valuetext(value: number) {
        setValue(value);
        return `${value}`;
      }
    return (
        <div className={crossMarginShow ? "trade_modal cross_margin_modal " : "trade_modal cross_margin_modal hidden"}>
            <div className="trade_modal_filter">

            </div>
            <div className="trade_modal_w">
                <div className="trade_modal_header">
                    <span>Режим кросс-маржи</span>
                    <img onClick={setCrossMarginShowSet} src="img/modal_close4.svg" alt=""/>
                </div>
                <div className="trade_modal_main">
                    <div className="trade_modal_main_btn_full trade_modal_mtfirst">
                        Марж. торговля
                    </div>
                    <div className="trade_modal_main_text_info">
                        В режиме Кросс маржи весь доступный остаток на соответствующем счёте будет задействован для поддержки минимальной маржи и предотвращения ликвидации. Весь соответствующий доступный баланс может быть утерян в случае ликвидации. Обратите внимание, что корректировка
                        кредитного плеча повлияет на все позиции и активные ордера по текущей паре.
                    </div>
                    <div className="trade_modal_main_input trade_modal_mtstandart">
                        <div className="trade_modal_main_input_title">
                            Кредитное плечо
                        </div>
                        <div className="trade_modal_main_input_w">
                            <input disabled className="iw100 tac" type="text" value={value}/>
                        </div>
                    </div>
                    <div className="trade_modal_main_input_picker trade_modal_mtstandart">
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={20}
                        getAriaValueText={valuetext}
                        step={1}
                        valueLabelDisplay="auto"
                        marks={marks}
                        />
                    </div>
                    <div className="trade_modal_main_text_info">
                        Субаккаунт можно использовать для изолирования позиций или маржи.
                        <div className="trade_modal_main_text_info_row">
                            <span>Переключить аккаунт</span>
                            <img src="img/right_green.svg" alt=""/>
                        </div>
                    </div>
                    <div className="trade_modal_main_btns">
                        <div onClick={setCrossMarginShowSet} className="trade_modal_main_btn trade_modal_main_btn_ok">
                            Ок
                        </div>
                        <div onClick={setCrossMarginShowSet} className="trade_modal_main_btn trade_modal_main_btn_cancel">
                            Отмена
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CrossMargin