import React, { useEffect, useState } from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeModel from './components/CubeModel';

function useMouseRotate({active}: {active: boolean}) {

    const [rotation, setRotation] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouse = (event: MouseEvent) => {
            setRotation({
                x: (event.clientY - window.innerWidth / 2) / 5 * -1,
                y: (event.clientX - window.innerWidth / 2) / 5,
            })
        };
        window.addEventListener('mousemove', handleMouse, false);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [active]);

    return rotation;
}

function App() {
    let state = {active: true};
    const rotation = useMouseRotate(state);

    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <MovementControl />
            <div className="flex-1 relative">
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
            </div>
        </div>
    );
}

export default App;
