import React from 'react';

// function createNumberFormatter(digits: number): (value: number) => string {
//     return (value: number): string => {
//         return value.toFixed(Math.max(Math.min(digits, 20), 0));
//     };
// }

export function NumberFormatter(value: number, digits: number): string {
    return value.toFixed(Math.max(Math.min(digits, 20), 0));
}

function mapRange(value: number, start1: number, end1: number, start2: number, end2: number): number {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}

function constrainRange(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

type SliderProps = {
    value: number,
    valueSet: (pos: number) => void,
    minValue?: number,
    maxValue?: number,
    step?: number,
}

const SliderView: React.FC<SliderProps> = (props) => {
    const {
        value,
        valueSet,
        minValue = 0,
        maxValue = 200,
        step = 1,
    } = props;
    const tracker = React.useRef<HTMLDivElement>(null);

    const viewValue = constrainRange(mapRange(value, minValue, maxValue, 0, 100), 0, 100);

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
            const rawValue = mapRange(constrainRange(pos.x, 0, rect.width), 0, rect.width, minValue, maxValue);
            valueSet(rawValue);
        }

        function onDocumentMouseUp(ev: MouseEvent) {
            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('mouseup', onDocumentMouseUp);
        }
    } //onMouseDown()

    return (
        <div className="tp-sldv">
            <div className="tp-sldv_t" tabIndex={0} ref={tracker} onMouseDown={onMouseDown}>
                <div className="tp-sldv_k" style={{ width: viewValue }}>
                </div>
            </div>
        </div>
    );
};

export default SliderView;
