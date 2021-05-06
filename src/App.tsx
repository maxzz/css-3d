import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeModel from './components/CubeModel';

function useMouseRotate(active: boolean) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (event: MouseEvent) => {
            setRotation({
                x: (event.clientY - window.innerWidth / 2) / 5 * -1,
                y: (event.clientX - window.innerWidth / 2) / 5,
            });
        };

        active && window.addEventListener('mousemove', handleMouse, false);
        return () => active ? window.removeEventListener('mousemove', handleMouse) : undefined;
    }, [active]);

    return rotation;
}

function App() {
    const [rotationActive, setRotationActive] = useState(false);
    const rotation = useMouseRotate(rotationActive);

    console.log('aa', rotationActive, rotation);

    let rotationCb = useCallback((v: boolean) => {
        setRotationActive(v);
    }, []);

    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <MovementControl onClick={rotationCb} />
            <div className="flex-1 relative">
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
            </div>
        </div>
    );
}

export default App;
