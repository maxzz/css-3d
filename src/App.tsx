import React, { useCallback, useState } from 'react';
import './App.css';
import MovementControl, { useMouseRotate } from './components/MovementControl';
import CubeModel from './components/CubeModel';
import LogoPlay from './components/LogoPlay';

function App() {
    const [rotationActive, setRotationActive] = useState(false);
    const rotation = useMouseRotate(rotationActive);

    //const rotationCb = useCallback(setRotationActive, []);

    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <div className="flex">
                <div className="w-32 pt-2">
                    <LogoPlay />
                </div>
                <MovementControl onClick={setRotationActive} />
            </div>
            <div className="flex-1 relative">
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
            </div>
        </div>
    );
}

export default App;
