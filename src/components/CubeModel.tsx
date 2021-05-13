import React from 'react';
import { hexaToRgba } from '../colors';

type CubeModelProps = {
    width: number;
    height: number;
    depth: number;
    rotateX: number;
    rotateY: number;
    color?: string;
};

function CubeModel(props: CubeModelProps) {
    const {
        width = 230,
        height = 350,
        depth = 100,
        rotateX,
        rotateY,
        color} = props;

    let colorValue = hexaToRgba(color || '#1879da80') || { r: 0x18, g: 0x79, b: 0xda, a: 1 }; // #187979
    let red = colorValue.r;
    let green = colorValue.g;
    let blue = colorValue.b;
    let opacity = colorValue.a;

    let shadowRatio = 5;

    function makeShade(n: number): string {
        return `rgba(${red - n * shadowRatio}, ${green - n * shadowRatio}, ${blue - n * shadowRatio}, ${opacity})`;
    }

    let style1 = { //front
        background: makeShade(5),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(0deg) translateZ(${depth / 2}px)`
    };

    let style2 = { //left
        background: makeShade(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(90deg) translateZ(${width / 2}px)`
    };

    let style3 = { //top
        background: makeShade(0),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${height / 2}px)`
    };

    let style4 = { //bottom
        background: makeShade(20),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(${height / 2}px)`
    };

    let style5 = { //right
        background: makeShade(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(-90deg) translateZ(${width / 2}px)`
    };

    let style6 = { //back
        background: makeShade(15),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(180deg) translateZ(${depth / 2}px)`
    };

    return (
        <div
            className="absolute top-1/2 left-1/2 select-none"
            style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
            <div className="absolute" style={style1}></div> {/* _front_ */}
            <div className="absolute" style={style2}></div> {/* _left__ */}
            <div className="absolute" style={style3}></div> {/* _top___ */}
            <div className="absolute" style={style4}></div> {/* _bottom */}
            <div className="absolute" style={style5}></div> {/* _right_ */}
            <div className="absolute" style={style6}></div> {/* _back__ */}

            <div className="absolute" style={{...style5, background: 'transparent', borderBottom: '3px solid blue', borderLeft: '3px solid green'}}></div> {/* _right_ */}
            <div className="absolute" style={{...style6, background: 'transparent', borderBottom: '3px solid red'}}></div> {/* _back__ */}
        </div>
    );
}

export default CubeModel;
