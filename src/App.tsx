import React, { useState } from 'react';
import './App.css';

function Cube() {
    let rotateX = 140;
    let rotateY = 20;

    let red = 0x6c;
    let green = 0x99;
    let blue = 0xc6;

    let shadowRatio = 5;
    let opacity = .39;

    let width = 250;
    let height = 350;
    let depth = 200;

    function color(n: number): string {
        return `rgba(${red - n * shadowRatio}, ${green - n * shadowRatio}, ${blue - n * shadowRatio}, ${opacity})`;
    }

    let style1 = //front
    {
        background: color(5),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(0deg) translateZ(${depth / 2}px)`
    };

    let style2 = //left
    {
        background: color(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(90deg) translateZ(${width / 2}px)`
    };

    let style3 = //top
    {
        background: color(0),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(90deg) translateZ('${height / 2}px)`
    };

    let style4 = //bottom
    {
        background: color(20),
        width: `${width}px`,
        height: `${depth}px`,
        transform: `translate(-50%, -50%) rotateX(-90deg) translateZ('${height / 2}px)`
    };

    let style5 = //right
    {
        background: color(10),
        width: `${depth}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(-90deg) translateZ('${width / 2}px)`
    };

    let style6 = //back
    {
        background: color(15),
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(-50%, -50%) rotateY(180deg) translateZ('${depth / 2}px)`
    };

    return (
        <>
            <div className="cube-parent" style={{ transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)' }}>
                <div className="face -front" style={style1}></div>
                <div className="face -left" style={style2}></div>
                <div className="face -top" style={style3}></div>
                <div className="face -bottom" style={style4}></div>
                <div className="face -right" style={style5}></div>
                <div className="face -back" style={style6}></div>
            </div>

            <div className="c">
                <div className="dvn5khfgk6">
                    <div className="face0 -front"></div>
                    <div className="face0 -left"></div>
                    <div className="face0 -top"></div>
                    <div className="face0 -bottom"></div>
                    <div className="face0 -right"></div>
                    <div className="face0 -back"></div>
                </div>
            </div>

        </>
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
