// function createNumberFormatter(digits: number): (value: number) => string {
//     return (value: number): string => {
//         return value.toFixed(Math.max(Math.min(digits, 20), 0));
//     };
// }

export function NumberFormatter(value: number, digits: number): string {
    return value.toFixed(Math.max(Math.min(digits, 20), 0));
}

export function mapRange(value: number, start1: number, end1: number, start2: number, end2: number): number {
    const p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
}

export function constrainRange(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export interface StepKeys {
	altKey: boolean;
	shiftKey: boolean;
	downKey: boolean;
	upKey: boolean;
}

export function getStepForKey(baseStep: number, keys: StepKeys): number {
	const step = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
	return keys.upKey ? +step : keys.downKey ? -step : 0;
}

export function getVerticalStepKeys(ev: KeyboardEvent): StepKeys {
	return { altKey: ev.altKey, shiftKey: ev.shiftKey, downKey: ev.key === 'ArrowDown', upKey: ev.key === 'ArrowUp' };
}

export function getHorizontalStepKeys(ev: KeyboardEvent): StepKeys {
	return { altKey: ev.altKey, shiftKey: ev.shiftKey, downKey: ev.key === 'ArrowLeft', upKey: ev.key === 'ArrowRight' };
}
