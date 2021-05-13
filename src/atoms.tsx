import { atom } from 'jotai';

export const rotAtom = atom({x: 0, y: 0});
export const rotActiveAtom = atom(false);

export const cubeW = atom(0);
export const cubeH = atom(0);
export const cubeD = atom(0);
