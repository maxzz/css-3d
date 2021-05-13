import React from 'react';
import SliderView, { NumberFormatter } from './SliderView';
import './slider.scss';
import { useAtom } from 'jotai';
import { cubeD, cubeH, cubeW } from '../../atoms';

function SliderGroup() {
    const [valueW, valueWSet] = useAtom(cubeW);
    const [valueH, valueHSet] = useAtom(cubeH);
    const [valueD, valueDSet] = useAtom(cubeD);
    
    const digits = 0;
    return (
        <div className="tp-vars tp-rotv custom-vars">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-14">Width</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueW} valueSet={valueWSet} maxValue={350} />
                            </div>
                            <div className="tp-sldtxtv_t">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueW, digits)} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-14">Height</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueH} valueSet={valueHSet} maxValue={350} />
                            </div>
                            <div className="tp-sldtxtv_t">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueH, digits)} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-14">Deep</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueD} valueSet={valueDSet} maxValue={350} />
                            </div>
                            <div className="tp-sldtxtv_t">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueD, digits)} readOnly />
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
