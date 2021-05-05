import React, { useState } from 'react';
import './App.css';

function Cube() {
    let rotateX = 0;
    let rotateY = 0;

    let style1 = //front
    `{
        background: 'rgba(' + (red - 5 * shadowRatio) + ', ' + (green - 5 * shadowRatio) + ', ' + (blue - 5 * shadowRatio) + ', ' + opacity + ')', 
        width: width + 'px', 
        height: height + 'px', 
        transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(' + depth / 2 + 'px)'
    }`;

    let style2 = //left
    `{
        background: 'rgba(' + (red - 10 * shadowRatio) + ', ' + (green - 10 * shadowRatio) + ', ' + (blue - 10 * shadowRatio) + ', ' + opacity + ')',
        width: depth + 'px',
        height: height + 'px',
        transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(' + width / 2 + 'px)'
    }`;

    let style3 = //top
    `{
        background: 'rgba(' + (red - 0 * shadowRatio) + ', ' + (green - 0 * shadowRatio) + ', ' + (blue - 0) + ', ' + opacity + ')',
        width: width + 'px',
        height: depth + 'px',
        transform: 'translate(-50%, -50%) rotateX(90deg) translateZ(' + height / 2 + 'px)'
    }`;

    let style4 = //bottom
    `{
        background: 'rgba(' + (red - 20 * shadowRatio) + ', ' + (green - 20 * shadowRatio) + ', ' + (blue - 20 * shadowRatio) + ', ' + opacity + ')',
        width: width + 'px',
        height: depth + 'px',
        transform: 'translate(-50%, -50%) rotateX(-90deg) translateZ(' + height / 2 + 'px)'
    }`;

    let style5 = //right
    `{
        background: 'rgba(' + (red - 10 * shadowRatio) + ', ' + (green - 10 * shadowRatio) + ', ' + (blue - 10 * shadowRatio) + ', ' + opacity + ')',
        width: depth + 'px',
        height: height + 'px',
        transform: 'translate(-50%, -50%) rotateY(-90deg) translateZ(' + width / 2 + 'px)'
    }`;

    let style6 = //back
    `{
        background: 'rgba(' + (red - 15 * shadowRatio) + ', ' + (green - 15 * shadowRatio) + ', ' + (blue - 15 * shadowRatio) + ', ' + opacity + ')',
        width: width + 'px',
        height: height + 'px',
        transform: 'translate(-50%, -50%) rotateY(180deg) translateZ(' + depth / 2 + 'px)'
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
