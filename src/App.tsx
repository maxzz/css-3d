import React, { useEffect, useState } from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeModel from './components/CubeModel';

function App() {
    const [rotateX, setRotateX] = useState(140);
    const [rotateY, setRotateY] = useState(20);

    useEffect(() => {
        const handleMouse = (event: MouseEvent) => {
            setRotateY((event.clientX - window.innerWidth / 2) / 5);
            setRotateX((event.clientY - window.innerWidth / 2) / 5 * -1);
        };
        window.addEventListener('mousemove', handleMouse, false);
        return () => {
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <MovementControl />
            <div className="flex-1 relative">
                <div className="" style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
                    <CubeModel rotateX={rotateX} rotateY={rotateY} />
                </div>
            </div>
        </div>
    );
}

export default App;
