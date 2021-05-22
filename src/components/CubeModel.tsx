import React from 'react';
import { ColorRGB } from '../utils/colors';
import { constrainRange, NumberFormatter } from './slider/numbers';

type CubeModelProps = {
    width: number;
    height: number;
    depth: number;
    color: ColorRGB;
    rotateX: number;
    rotateY: number;
    shadowRatio: number,
};

export type CubeStyles = Record<string, Record<string, string | number>>;

export function getCubeStyles(cubeProps: CubeModelProps): CubeStyles {
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
        background: makeShade(5),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(0deg) translateZ(${depth / 2}px)`
    };

    let l = { //left
        background: makeShade(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(90deg) translateZ(${width / 2}px)`
    };

    let t = { //top
        background: makeShade(0),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${height / 2}px)`
    };

    let b = { //bottom
        background: makeShade(20),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(${height / 2}px)`
    };

    let r = { //right
        background: makeShade(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(-90deg) translateZ(${width / 2}px)`
    };

    let k = { //back
        background: makeShade(15),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(180deg) translateZ(${depth / 2}px)`
    };

    return {f, l, t, b, r, k};
}

function CubeModel(props: CubeModelProps) {
    const styles = getCubeStyles(props)
    return (
        <div
            className="absolute top-1/2 left-1/2 select-none"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg)` }}
        >
            <div className="absolute" style={styles.f}></div> {/* _front_ */}
            <div className="absolute" style={styles.l}></div> {/* _left__ */}
            <div className="absolute" style={styles.t}></div> {/* _top___ */}
            <div className="absolute" style={styles.b}></div> {/* _bottom */}
            <div className="absolute" style={styles.r}></div> {/* _right_ */}
            <div className="absolute" style={styles.k}></div> {/* _back__ */}

            <div className="absolute" style={{...styles.r, background: 'transparent', borderBottom: '3px solid blue', borderLeft: '3px solid green'}}></div> {/* _right_ */}
            <div className="absolute" style={{...styles.k, background: 'transparent', borderBottom: '3px solid red'}}></div> {/* _back__ */}
        </div>
    );
}

export default CubeModel;
