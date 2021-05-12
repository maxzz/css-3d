import React from 'react';
import '../assets/slider.scss';

function mapRange(
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number,
): number {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}

function Slider() {
    return (
        <div className="tp tp-rotv">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    <div className="tp-lblv_l">label</div>
                    <div className="tp-lblv_v">
                        <div className="tp-sldtxtv">
                            <div className="tp-sldtxtv_s">
                                <div className="tp-sldv">
                                    <div className="tp-sldv_t" tabIndex={0}>
                                        <div className="tp-sldv_k w-[67.35%]">
                                            <div className="c">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-sldtxtv_t">
                                <div className="tp-txtv tp-txtv-num">
                                    <input className="tp-txtv_i" type="text" defaultValue="63" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
