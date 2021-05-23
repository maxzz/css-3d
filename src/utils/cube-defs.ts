import { constrainRange, NumberFormatter } from '../components/slider/numbers';
import { ColorRGB } from './colors';

export type CubeModelProps = {
    width: number;
    height: number;
    depth: number;
    color: ColorRGB;
    angle: {x: number, y: number};
    shadowRatio: number,
};

export type FaceStyles = Record<string, React.CSSProperties>;

export function getCubeStyles(cubeProps: CubeModelProps): FaceStyles {
    let {
        width,
        height,
        depth,
        color,
        shadowRatio,
    } = cubeProps;

    width = +width.toFixed(2);
    height = +height.toFixed(2);
    depth = +depth.toFixed(2);

    function makeShade(n: number): string {
        return `rgba(${
            constrainRange(color.r - n * shadowRatio, 0, 255)}, ${
            constrainRange(color.g - n * shadowRatio, 0, 255)}, ${
            constrainRange(color.b - n * shadowRatio, 0, 255)}, ${
            NumberFormatter(color.a, 1)})`;
    }

    let f = { //front
        '--faceWeight': 5,
        width: 'var(--width)',
        height: 'var(--height)',
        transform: `translate(-50%, -50%) rotateY(0deg) translateZ(calc((var(--depth) / 2)))`
    };

    let l = { //left
        '--faceWeight': 10,
        width: 'var(--depth)',
        height: 'var(--height)',
        transform: `translate(-50%, -50%) rotateY(90deg) translateZ(calc((var(--width) / 2)))`
    };

    let t = { //top
        '--faceWeight': 0,
        width: 'var(--width)',
        height: 'var(--depth)',
        transform: `translate(-50%, -50%) rotateX(90deg) translateZ(calc((var(--height) / 2)))`
    };

    let b = { //bottom
        '--faceWeight': 20,
        width: 'var(--width)',
        height: 'var(--depth)',
        transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(calc((var(--height) / 2)))`
    };

    let r = { //right
        '--faceWeight': 10,
        width: 'var(--depth)',
        height: 'var(--height)',
        transform: `translate(-50%, -50%) rotateY(-90deg) translateZ(calc((var(--width) / 2)))`
    };

    let k = { //back
        '--faceWeight': 15,
        width: 'var(--width)',
        height: 'var(--height)',
        transform: `translate(-50%, -50%) rotateY(180deg) translateZ(calc((var(--depth) / 2)))`
    };

    return {f, l, t, b, r, k};
}

export function getCubeParentStyles(cubeProps: CubeModelProps): React.CSSProperties {
    let {
        width,
        height,
        depth,
        color,
        angle,
    } = cubeProps;

    width = +width.toFixed(2);
    height = +height.toFixed(2);
    depth = +depth.toFixed(2);

    return {
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${angle.x}deg) rotateY(${angle.y}deg)`,
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--depth': `${depth}px`,

        '--shadowRatio': 5,
        '--faceWeight': 1,
        '--faceR': color.r,
        '--faceG': color.g,
        '--faceB': color.b,
        '--faceA': .5, // #1879da80
    } as React.CSSProperties;
}
