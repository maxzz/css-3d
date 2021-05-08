import React from 'react';
import svgpath from 'svgpath';

function LogoPlay() {
    let path = "M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z";

    let points: {x: number, y: number}[] = [];
    let transformed = svgpath(path)
                    .iterate(function(segemtns, index, x, y) {
                        index && points.push({x, y});
                    }).scale(1.05);

    return (
        <svg viewBox="0 0 83 43">
            <filter filterUnits="objectBoundingBox" id="a">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation=".7" />
                {/* <feGaussianBlur in="SourceAlpha" result="blur2" stdDeviation="1.7" /> */}
                <feColorMatrix in="SourceGraphic" result="blur2" type="hueRotate" values="220" />
                <feOffset dx="-1.7" dy="-1.7" in="blur" result="offsetBlurredAlpha1" />
                <feOffset dx="1.7" dy="1.7" in="blur2" result="offsetBlurredAlpha2" />
                <feMerge>
                    <feMergeNode in="offsetBlurredAlpha1" />
                    <feMergeNode in="offsetBlurredAlpha2" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <g filter="url(#a)" style={{stroke: "#ada6ff", fill: "none"}}>
                <path d={transformed.toString()} />
            </g>
            <g filter="url(#a)" style={{stroke: "red", fill: "none"}}>
                <path d={path} />
            </g>
            <g style={{stroke: "#00349e70", fill: "none"}}>
                {points.map((point, index) => <circle cx={point.x} cy={point.y} r="3" key={index} />)}
            </g>
        </svg>
    );
}

export default LogoPlay;
