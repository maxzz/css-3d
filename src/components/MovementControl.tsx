import React, { useState, useEffect } from 'react';

export function useMouseRotate(active: boolean) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouse(event: MouseEvent) {
            setRotation({
                x: (event.clientY - window.innerWidth / 2) / 5 * -1,
                y: (event.clientX - window.innerWidth / 2) / 5,
            });
        }
        active && window.addEventListener('mousemove', handleMouse, false);
        return () => active ? window.removeEventListener('mousemove', handleMouse) : undefined;
    }, [active]);

    return rotation;
}

function MovementControl({ onClick }: { onClick: (isOn: boolean) => void; }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function onDone() {
            setIsActive(false);
            onClick(false);
            document.removeEventListener('mouseup', onDone);
        }
        isActive && document.addEventListener('mouseup', onDone, false);
        return () => isActive ? document.removeEventListener('mouseup', onDone) : undefined;
    }, [isActive, onClick]);
//${isActive ? 'cursor-move': 'cursor-pointer'}
    return (
        <div
            className={`w-12 h-12 my-4 ml-auto mr-8 p-2 bg-gray-400 border rounded-md border-gray-400 text-gray-100 cursor-pointer`}
            onMouseDown={() => { setIsActive(true); onClick(true); }}
        >
            <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M17.8 5.5c1.2-.7 2.3-1.3 3.5-1.7 3-1.1 5.5-1.1 6.7.2 1 1 1.2 2.9.6 5.4-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.9-3.2.5-5.7-1.1-7.3-1.8-1.8-5-2-8.9-.6-1.5.6-3 1.4-4.6 2.3-1.5-1-3.1-1.8-4.6-2.3-3.9-1.5-7-1.3-8.9.6C-.1 5.2.8 10.4 4.3 16c-1 1.5-1.8 3.1-2.3 4.6-1.5 3.9-1.3 7 .6 8.9 1 1 2.5 1.5 4.2 1.5 1.4 0 2.9-.3 4.7-1 3.6-1.4 7.6-4 11.1-7.6l.5-.5V24c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1s.4 1 1 1h3.1l-1 1.1c-3.3 3.3-7 5.8-10.4 7.1-3.1 1.1-5.6 1.1-6.8-.2-1.2-1.2-1.3-3.7-.1-6.8.4-1.1 1-2.3 1.7-3.5 1 1.4 2.2 2.8 3.5 4.2H6c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1s-1 .4-1 1V20a29.7 29.7 0 01-3.3-4.1 38.8 38.8 0 019.4-9.3c1.7 1.2 3.4 2.6 5.1 4.2 3.3 3.3 5.8 7 7.1 10.4 1.2 3.1 1.1 5.5-.1 6.8-1.3 1.3-4 1.3-7.3-.1-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3 2 .8 3.8 1.2 5.3 1.2 1.7 0 3.2-.5 4.2-1.5 3.6-3.6.6-12.4-7-19.9a56.5 56.5 0 00-4.8-4zm-8.3 4a43.3 43.3 0 00-4 4.7C2.8 9.6 2.3 5.6 4 4c1.2-1.2 3.7-1.3 6.8-.1 1.1.4 2.3 1 3.5 1.7a29.3 29.3 0 00-4.8 3.9z" />
            </svg>
        </div>
    );
}

export default MovementControl;
