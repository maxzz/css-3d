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

interface StepKeys {
	altKey: boolean;
	shiftKey: boolean;
	downKey: boolean;
	upKey: boolean;
}

function getStepForKey(baseStep: number, keys: StepKeys): number {
	const step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
	return keys.upKey ? +step : keys.downKey ? -step : 0;
}

function getVerticalStepKeys(ev: KeyboardEvent): StepKeys {
	return { altKey: ev.altKey, shiftKey: ev.shiftKey, downKey: ev.key === 'ArrowDown', upKey: ev.key === 'ArrowUp' };
}

function getHorizontalStepKeys(ev: KeyboardEvent): StepKeys {
	return { altKey: ev.altKey, shiftKey: ev.shiftKey, downKey: ev.key === 'ArrowLeft', upKey: ev.key === 'ArrowRight' };
}

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
