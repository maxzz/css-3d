import React from 'react';
import { ColorRGB } from '../utils/colors';
import { constrainRange, NumberFormatter } from './slider/numbers';
import './CubeModel.scss';

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
        '--faceR': 24,
        '--faceG': 121,
        '--faceB': 218,
        '--faceA': .5, // rgba(24, 121, 218, 0.502) #1879da80

        //background: `rgba(calc(var(--faceR) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceG) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceB) - calc(var(--shadowRatio) * var(--faceWeight))), var(--faceA))`

    } as React.CSSProperties;
}

function CubeModel(props: CubeModelProps) {
    const styles = getCubeStyles(props)
    return (
        <div
            className="absolute top-1/2 left-1/2 select-none"
            style={getCubeParentStyles(props)}
        >
            <div className="absolute cube-face cube__f"></div> {/* _front_ */}
            <div className="absolute cube-face cube__l"></div> {/* _left__ */}
            <div className="absolute cube-face cube__t"></div> {/* _top___ */}
            <div className="absolute cube-face cube__b"></div> {/* _bottom */}
            <div className="absolute cube-face cube__r"></div> {/* _right_ */}
            <div className="absolute cube-face cube__k"></div> {/* _back__ */}

            <div className="absolute" style={{...styles.r, background: 'transparent', borderBottom: '3px solid blue', borderLeft: '3px solid green'}}></div> {/* _right_ */}
            <div className="absolute" style={{...styles.k, background: 'transparent', borderBottom: '3px solid red'}}></div> {/* _back__ */}
        </div>
    );
}

export default CubeModel;
