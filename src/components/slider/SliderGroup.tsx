import React from 'react';
import SliderView from './SliderView';
import './slider.scss';
import { useAtom } from 'jotai';
import { cubeDAtom, cubeHAtom, cubeWAtom } from '../../atoms';
import { NumberFormatter } from './numbers';

const MAX_VALUE = 350;

function SliderGroup() {
    const [valueW, valueWSet] = useAtom(cubeWAtom);
    const [valueH, valueHSet] = useAtom(cubeHAtom);
    const [valueD, valueDSet] = useAtom(cubeDAtom);

    function getInputValue(ev: React.ChangeEvent<HTMLInputElement>, defValue: number, maxValue: number = MAX_VALUE) {
        let v = parseInt(ev.target.value, 10);
        v = isNaN(v) ? defValue : v;
        return v;
    }

    const digits = 0;
    return (
        <div className="tp-vars tp-rotv custom-vars self-center">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-11">Width</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueW} valueSet={valueWSet} maxValue={MAX_VALUE} />
                            </div>
                            <div className="tp-sldtxtv_t max-w-[2rem]">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueW, digits)} onChange={(ev) => valueWSet(getInputValue(ev, valueW))} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-11">Height</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueH} valueSet={valueHSet} maxValue={MAX_VALUE} />
                            </div>
                            <div className="tp-sldtxtv_t max-w-[2rem]">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueH, digits)} onChange={(ev) => valueHSet(getInputValue(ev, valueW))} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l w-11">Deep</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <SliderView value={valueD} valueSet={valueDSet} maxValue={MAX_VALUE} />
                            </div>
                            <div className="tp-sldtxtv_t max-w-[2rem]">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" value={NumberFormatter(valueD, digits)} onChange={(ev) => valueDSet(getInputValue(ev, valueW))} />
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
