import React from 'react';
import '../assets/slider.scss';

function Slider() {
    return (
        <div className="tp-rotv">

            <div className="tp-lblv tp-v-fst">
                <div className="tp-lblv_l">spacing</div>
                <div className="tp-lblv_v">
                    <div className="tp-sldtxtv">
                        <div className="tp-sldtxtv_s">
                            <div className="tp-sldv">
                                <div className="tp-sldv_t" tabIndex={0}>
                                    <div className="tp-sldv_k" style={{ width: 0 }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tp-sldtxtv_t"><div className="tp-txtv tp-txtv-num">
                            <input className="tp-txtv_i" type="text" />
                            <div className="tp-txtv_k">
                                <svg className="tp-txtv_g"><path className="tp-txtv_gb"></path><path className="tp-txtv_gh"></path>
                                </svg>
                                <div className="tp-ttv">
                                </div>
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
