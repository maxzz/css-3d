import React from 'react';
import svgpath from 'svgpath';

function LogoPlay() {
    let path = "M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z";

    let points: {x: number, y: number}[] = [];
    let transformed = svgpath(path)
                    .scale(1.47)
                    .iterate(function(segemtns, index, x, y) {
                        index && points.push({x, y});
                    });

    return (
        <svg viewBox="0 0 83 43">
            <filter filterUnits="objectBoundingBox" id="a">
                <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="1" />
                <feOffset dx="2" dy="2" in="blur" result="offsetBlurredAlpha" />
                <feMerge>
                    <feMergeNode in="offsetBlurredAlpha" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <g filter="url(#a)">
                <path d={transformed.toString()} fill="none" stroke="#f7931e" />
            </g>
            <g stroke="#f7931e" fill="none">
                {points.map((point, index) => <circle cx={point.x} cy={point.y} r="3" key={index} />)}
            </g>
        </svg>
    );
}

export default LogoPlay;
