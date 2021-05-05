import React, { useState } from 'react';
import './App.css';

function Cube() {
    let rotateX = 0;
    let rotateY = 0;

    let red = 0;
    let green = 0;
    let blue = 0;

    let shadowRatio = 0;
    let opacity = 0;

    let width = 50;
    let height = 100;
    let depth = 150;

    function color(n: number): string {
        return `rgba(${red - n * shadowRatio}, ${green - n * shadowRatio}, ${blue - n * shadowRatio}, ${opacity})`;
    }

    let style1 = //front
    `{
        background: ${color(5)},
        width: ${width}px,
        height: ${height}px,
        transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(${depth / 2}px)'
    }`;

    let style2 = //left
    `{
        background: ${color(10)},
        width: ${depth}px,
        height: ${height}px,
        transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(${width / 2}px)'
    }`;

    let style3 = //top
    `{
        background: ${color(0)},
        width: ${width}px,
        height: ${depth}px,
        transform: 'translate(-50%, -50%) rotateX(90deg) translateZ('${height / 2}px)'
    }`;

    let style4 = //bottom
    `{
        background: ${color(20)},
        width: ${width}px,
        height: ${depth}px,
        transform: 'translate(-50%, -50%) rotateX(-90deg) translateZ('${height / 2}px)'
    }`;

    let style5 = //right
    `{
        background: ${color(10)},
        width: ${depth}px,
        height: ${height}px,
        transform: 'translate(-50%, -50%) rotateY(-90deg) translateZ('${width / 2}px)'
    }`;

    let style6 = //back
    `{
        background: ${color(15)},
        width: ${width}px,
        height: ${height}px,
        transform: 'translate(-50%, -50%) rotateY(180deg) translateZ('${depth / 2}px)'
    }`;

    return (
        <div className="cube" style={{ transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)' }}>
            <div className="face -front" ></div>
            <div className="face -left"></div>
            <div className="face -top"></div>
            <div className="face -bottom"></div>
            <div className="face -right"></div>
            <div className="face -back"></div>
        </div>
    );
}

function App() {
    return (
        <div className="">
            <div className="">
                <Cube />
            </div>
            <button>ready</button>
        </div>
    );
}

export default App;
