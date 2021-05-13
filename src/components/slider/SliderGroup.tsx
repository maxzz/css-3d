import React from 'react';
import SliderView, { NumberFormatter } from './Slider';
import './slider.scss';

function SliderGroup() {
    const [value, valueSet] = React.useState(40);

    return (
        <div className="tp tp-rotv">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l">label</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={value} valueSet={valueSet} />
                            </div>
                            <div className="tp-sldtxtv_t">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(value, 2)} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderGroup;
