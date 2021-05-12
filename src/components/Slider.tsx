import React, { useRef, useState } from 'react';
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
    const tracker = useRef<HTMLDivElement>(null);
    const [trackerPos, trackerPosSet] = useState(40);

    function onMouseDown(ev: React.MouseEvent) {
        ev.preventDefault();

        (ev.currentTarget as HTMLElement)?.focus();

		document.addEventListener('mousemove', onDocumentMouseMove);
		document.addEventListener('mouseup', onDocumentMouseUp);

        function onDocumentMouseMove(ev: MouseEvent) {
            const win = tracker.current!.ownerDocument.defaultView;
	        const rect = tracker.current!.getBoundingClientRect();
            const pos = {
                x: ev.pageX - (((win && win.scrollX) || 0) + rect.left),
                y: ev.pageY - (((win && win.scrollY) || 0) + rect.top),
            };
            
            console.log(pos);
            trackerPosSet(pos.x);
        }

        function onDocumentMouseUp(ev: MouseEvent) {
            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('mouseup', onDocumentMouseUp);
        }
    } //onMouseDown()

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
                                    <div className="tp-sldv_t" tabIndex={0} ref={tracker} onMouseDown={onMouseDown}>
                                        <div className="tp-sldv_k" style={{width: trackerPos}}>
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
