import React from 'react';
import svgpath from 'svgpath';

function LogoPlay() {
    let path = "M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z";

    let points: { x: number, y: number; }[] = [];
    let transformed = svgpath(path)
        .iterate(function (segemtns, index, x, y) {
            index && points.push({ x, y });
        }).scale(1.05);

    return (
        <svg viewBox="0 0 94.2 81.9" className="w-full h-full" strokeWidth="2" overflow="visible">
            <filter filterUnits="objectBoundingBox" id="a">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation=".7" />
                <feGaussianBlur in="SourceAlpha" result="blur2" stdDeviation="1.7" />
                <feColorMatrix in="SourceGraphic" result="blur2" type="hueRotate" values="220" />
                <feOffset dx="-3" dy="-2" in="blur" result="offsetBlurredAlpha1" />
                <feOffset dx="3" dy="2" in="blur2" result="offsetBlurredAlpha2" />
                <feMerge>
                    <feMergeNode in="offsetBlurredAlpha1" />
                    <feMergeNode in="offsetBlurredAlpha2" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="15" y1="5.3" x2="70.3" y2="83.4" style={{'--c1': '#a8e6378a', '--c2': 'green', '--c3': '#0056ff', } as React.CSSProperties}>
                <stop offset="0" stopColor="var(--c1)" />
                <stop offset=".5" stopColor="var(--c2)" />
                <stop offset="1" stopColor="var(--c3)" />
            </linearGradient>
            <g fill="none" stroke="url(#SVGID_1_)" filter="url(#a)">
                <path d="M14.1 23.1C8.9 6.8 23.3-9.7 44.1 8.4c14.8 12.9 8-5.5 19-5.5s45 55.5 24 50.5c-27.3-6.5 9.6 26.3-20.4 28C44.2 82.5 16.9 48.5 18 68.1 19.5 92.7.5 71.7.5 47s17.9-10.6 13.6-23.9z" />
                <path d="M24 19.6c.7 2.2 2 6 2.9 2.8.9-3.2.1-5.5-1.9-7.2-2-1.8-1.7 2.1-1 4.4z" strokeWidth=".9"/>
                <path d="M30.2 16c-1.1-1.6-2.8-4.5-.1-3.9s3.7 2.4 3.7 4.9c-.2 2.7-2.6.6-3.6-1z" strokeWidth=".9"/>
            </g>
        </svg>

        // <svg viewBox="0 0 83 43">
        //     <filter filterUnits="objectBoundingBox" id="a">
        //         <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation=".7" />
        //         {/* <feGaussianBlur in="SourceAlpha" result="blur2" stdDeviation="1.7" /> */}
        //         <feColorMatrix in="SourceGraphic" result="blur2" type="hueRotate" values="220" />
        //         <feOffset dx="-1.7" dy="-1.7" in="blur" result="offsetBlurredAlpha1" />
        //         <feOffset dx="1.7" dy="1.7" in="blur2" result="offsetBlurredAlpha2" />
        //         <feMerge>
        //             <feMergeNode in="offsetBlurredAlpha1" />
        //             <feMergeNode in="offsetBlurredAlpha2" />
        //             <feMergeNode in="SourceGraphic" />
        //         </feMerge>
        //     </filter>
        //     <g filter="url(#a)" style={{stroke: "#ada6ff", fill: "none"}}>
        //         <path d={transformed.toString()} />
        //     </g>
        //     <g filter="url(#a)" style={{stroke: "red", fill: "none"}}>
        //         <path d={path} />
        //     </g>
        //     <g style={{stroke: "#00349e70", fill: "none"}}>
        //         {points.map((point, index) => <circle cx={point.x} cy={point.y} r="3" key={index} />)}
        //     </g>
        // </svg>
    );
}

export default LogoPlay;
