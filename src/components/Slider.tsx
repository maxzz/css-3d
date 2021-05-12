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
        <div className="tp">
            {/* Row */}
            <div className="flex items-center">
                <div className="tp-lblv">
                    {/* Label */}
                    <div className="tp-lblv_l">label</div>
                    {/* Slider and Value container */}
                    <div className="tp-lblv_v bg-purple-100">
                        <div className="tp-sldtxtv">
                            {/* Slider */}
                            <div className="tp-sldv">
                                <div className="tp-sldv_t" tabIndex={0}>
                                    b
                                <div className="tp-sldv_k w-[67.35%]">
                                        <div className="c">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Input Value */}
                            <div className="tp-sldtxtv_t">
                                <input type="text" value="32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
