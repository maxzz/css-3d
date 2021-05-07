import React, { useCallback, useState } from 'react';
import './App.css';
import MovementControl, { useMouseRotate } from './components/MovementControl';
import CubeModel from './components/CubeModel';

function App() {
    const [rotationActive, setRotationActive] = useState(false);
    const rotation = useMouseRotate(rotationActive);

    const rotationCb = useCallback(setRotationActive, []);

    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <div className="flex">
                <div className="w-32 pt-2">
                    <svg viewBox="0 0 83 43">
                        <filter filterUnits="objectBoundingBox" id="a">
                            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="2" />
                            <feOffset dx="2" dy="2" in="blur" result="offsetBlurredAlpha" />
                            <feMerge>
                                <feMergeNode in="offsetBlurredAlpha" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <g filter="url(#a)">
                            <path d="M13 10c0-7 9-10 23 0s18 0 26 0 29 20 0 21-19-11-30-16 1 16-10 22S7 35 7 23s6-6 6-13z" fill="none" stroke="#f7931e" />
                        </g>
                    </svg>
                </div>

                <MovementControl onClick={rotationCb} />
            </div>
            <div className="flex-1 relative">
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
            </div>
        </div>
    );
}

export default App;
