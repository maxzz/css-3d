import React from 'react';
import CubeModel from './CubeModel';

function Axes({ angle }: { angle: { x: number, y: number; }; }) {
    return (
        <div className="w-full h-full"
            style={{
                transformStyle: 'preserve-3d',
                //perspective: '100px',
                transform: `scale(.2) rotateX(${angle.x}deg) rotateY(${angle.y}deg)`,
            }}
        >
            {/* x: red */}
            <div style={{ transformStyle: 'preserve-3d', transform: 'translateX(50px)' }}>
                <CubeModel angle={{ x: 0, y: 0 }} width={100} height={5} depth={5} color={{ r: 0xe6, g: 0x55, b: 0x55, a: 0.3 }} shadowRatio={5} />
            </div>
            {/* y: green */}
            <div style={{ transformStyle: 'preserve-3d', transform: 'translateY(-50px)' }}>
                <CubeModel angle={{ x: 0, y: 0 }} width={5} height={100} depth={5} color={{ r: 0, g: 0xff, b: 0, a: 0.3 }} shadowRatio={5} />
            </div>
            {/* z: blue */}
            <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}>
                <CubeModel angle={{ x: 0, y: 0 }} width={5} height={5} depth={100} color={{ r: 0x71, g: 0x71, b: 0xe6, a: 0.5 }} shadowRatio={5} />
            </div>
        </div>
    );
}

export default Axes;
