import { atom } from 'jotai';
import { hexaToRgba } from './utils/colors';

export const angleAtom = atom({x: 20, y: 20});
export const rotationActiveAtom = atom(false);

export const cubeWAtom = atom(250);
export const cubeHAtom = atom(60);
export const cubeDAtom = atom(300);

export const showGeneratedAtom = atom(true);

export const colorHexAtom = atom('#1879da80');
export const colorsAtom = atom(
    (get) => {
        let color = get(colorHexAtom);
        let colorValue = hexaToRgba(color || '#1879da80') || { r: 0x18, g: 0x79, b: 0xda, a: 1 }; // #187979
        return colorValue;
    });

export const shadowRatioAtom = atom(5);