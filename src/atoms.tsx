import { atom } from 'jotai';
import { hexaToRgba } from './utils/colors';
import { lagacyGenerator } from './utils/text-generator-legacy';

// Model properties

export const angleAtom = atom({x: 20, y: 20});
export const rotationActiveAtom = atom(false);

export const cubeWAtom = atom(250);
export const cubeHAtom = atom(60);
export const cubeDAtom = atom(300);

export const colorHexAtom = atom('#1879da80');
export const colorsAtom = atom(
    (get) => {
        let color = get(colorHexAtom);
        let colorValue = hexaToRgba(color || '#1879da80') || { r: 0x18, g: 0x79, b: 0xda, a: 1 }; // #187979
        return colorValue;
    });

export const shadowRatioAtom = atom(5);

// App properties

export const showGeneratedAtom = atom(true);
export const showTestAtom = atom(false);
export const generatedNameAtom = atom('cube-test');

export const generatedText = atom(
    (get) => {
        const cubeProps = {
            width: get(cubeWAtom),
            height: get(cubeHAtom),
            depth: get(cubeDAtom),
            color: get(colorsAtom),
            shadowRatio: get(shadowRatioAtom),
            angle: get(angleAtom)
        };
        return lagacyGenerator(cubeProps, get(generatedNameAtom));
    }
)
