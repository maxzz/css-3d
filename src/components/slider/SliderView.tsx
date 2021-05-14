import React from 'react';
import { constrainRange, getHorizontalStepKeys, getStepForKey, getVerticalStepKeys, mapRange } from './numbers';

export type InputValue = {
    value: number,
    minValue?: number,
    maxValue?: number,
    baseStep?: number,
    digits?: number, // number of digits after point
}

type SliderViewProps = InputValue & {
    valueSet: (pos: number) => void
};

const SliderView: React.FC<SliderViewProps> = (props) => {
    const {
        minValue = 0,
        maxValue = 100,
        baseStep = 1,
        value,
        valueSet,
    } = props;
    const viewValue = constrainRange(mapRange(value, minValue, maxValue, 0, 100), 0, 100);

    const tracker = React.useRef<HTMLDivElement>(null);

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

    function onKeyDown(ev: React.KeyboardEvent | KeyboardEvent) {
        let shiftH = getStepForKey(baseStep, getHorizontalStepKeys(ev as KeyboardEvent));
        let shiftV = getStepForKey(baseStep, getVerticalStepKeys(ev as KeyboardEvent));
        const rawValue = constrainRange(mapRange(value + shiftH + shiftV, minValue, maxValue, 0, 100), 0, 100);
        valueSet(rawValue);
    }

    return (
        <div className="tp-sldv" onKeyDown={onKeyDown}>
            <div className="tp-sldv_t" tabIndex={0} ref={tracker} onMouseDown={onMouseDown}>
                <div className="tp-sldv_k" style={{ width: `${viewValue}%` }}>
                </div>
            </div>
        </div>
    );
};

export default SliderView;
