import React from 'react';
import Slider from './Slider';
import './slider.scss';

function SliderGroup() {
    const [value, valueSet] = React.useState(40);

    // function createNumberFormatter(digits: number): (value: number) => string {
    //     return (value: number): string => {
    //         return value.toFixed(Math.max(Math.min(digits, 20), 0));
    //     };
    // }

    function NumberFormatter(value: number, digits: number): string {
        return value.toFixed(Math.max(Math.min(digits, 20), 0));
    }

    return (
        <div className="tp tp-rotv">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l">label</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <Slider value={value} valueSet={valueSet} />
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
