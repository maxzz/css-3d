import React, { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { rotActiveAtom, rotAtom } from '../atoms';

function MovementControl() {
    const [rotation, setRotation] = useAtom(rotAtom);
    const [rotActive, setRotActive] = useAtom(rotActiveAtom);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (rotActive && containerRef.current) {
            let rect = containerRef.current.getBoundingClientRect();
            let startPt = {x: Math.trunc(rect.left), y: Math.trunc(rect.top)};
            let prevRot = rotation;
            console.log('----------------');
            

            function onMove(event: MouseEvent) {
                let newRot = {
                    x: Math.trunc((-startPt.x + event.clientX - window.innerWidth / 2) / 5 * -1),
                    y: Math.trunc((-startPt.y + event.clientY - window.innerHeight / 2) / 5),
                };

                if (Math.abs(newRot.x) > Math.abs(prevRot.x) + 1 || Math.abs(newRot.y) > Math.abs(prevRot.y) + 1) {
                    console.log('rotation', 'prev', prevRot, 'new', newRot, `client {x: ${event.clientX}, y: ${event.clientY}}`, 'start', startPt, {event}, 'window.w', window.innerWidth);
                    setRotation(newRot);
                    prevRot = newRot;
                }
            }
            function onDone() {
                setRotActive(false);
                document.removeEventListener('mouseup', onDone);
            }

            window.addEventListener('mousemove', onMove, false);
            document.addEventListener('mouseup', onDone, false);
            return () => {
                window.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onDone);
            };
        }
    }, [rotActive]);

    return (
        <div
            ref={containerRef}
            className={`w-12 h-12 my-4 ml-auto mr-8 p-2
                text-gray-700 bg-gray-400 active:bg-gray-200
                border rounded-md border-gray-400
                cursor-pointer
                relative`
            }
            onMouseDown={() => { setRotActive(true); }}
        >
            {rotActive
                ?
                <svg viewBox="0 0 36.1 36.1" fill="currentColor" className={`text-red-600 w-20 h-20 transform -translate-x-6 translate-y-10`}>
                    <path d="M21.6 14h-7c-.3 0-.5.2-.5.5v7c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-7c0-.3-.3-.5-.5-.5zm-.5 7.1h-6v-6h6v6z" />
                    <path fill="#f7931e" d="M19.5 15H21v6h-1.5z" />
                    <path fill="#fbb03b" d="M15 15h4.5v6H15z" />
                    <path d="M23.1 9l-4.6-5.8a.6.6 0 00-.8 0l-.9 1.2L13 9l-.1.5c.1.2.3.3.5.3h2.4v2.4c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V9.8h2.4c.2 0 .4-.1.5-.3l-.1-.5zm-3.3-.2c-.3 0-.5.2-.5.5v2.4h-2.5V9.3c0-.3-.2-.5-.5-.5h-1.9l2.9-3.6.7-.9 3.6 4.5h-1.8zM12.2 15.8H9.8v-2.4c0-.2-.1-.4-.3-.5L9 13l-5.8 4.6-.2.4.2.4L9 23.1l.3.1.2-.1c.2-.1.3-.3.3-.5v-2.4h2.4c.3 0 .5-.2.5-.5v-3.5c0-.2-.2-.4-.5-.4zm-.5 3.5H9.3c-.3 0-.5.2-.5.5v1.9L4.3 18l4.5-3.6v1.9c0 .3.2.5.5.5h2.4v2.5zM23.1 26.5a.5.5 0 00-.5-.3h-2.4v-2.4c0-.3-.2-.5-.5-.5h-3.5c-.3 0-.5.2-.5.5v2.4h-2.4c-.2 0-.4.1-.5.3-.1.2-.1.4.1.5l3.7 4.6 1 1.2c.1.2.3.2.4.2l.4-.2L23 27c.2-.1.2-.3.1-.5zM18 31.7l-.7-.9-2.8-3.6h1.9c.3 0 .5-.2.5-.5v-2.4h2.5v2.4c0 .3.2.5.5.5h1.9L18 31.7zM32.9 17.6l-1.3-1-4.5-3.6-.5-.1c-.2.1-.3.3-.3.5v2.4h-2.4c-.3 0-.5.2-.5.5v3.5c0 .3.2.5.5.5h2.4v2.4c0 .2.1.4.3.5l.2.1.3-.1 5.8-4.6.1-.6-.1-.4zm-5.7 4v-1.9c0-.3-.2-.5-.5-.5h-2.4v-2.5h2.4c.3 0 .5-.2.5-.5v-1.9l3.5 2.8 1 .8-4.5 3.7z" />
                </svg>
                :
                <svg viewBox="0 0 32 32" fill="currentColor">
                    <path d="M17.8 5.5c1.2-.7 2.3-1.3 3.5-1.7 3-1.1 5.5-1.1 6.7.2 1 1 1.2 2.9.6 5.4-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.9-3.2.5-5.7-1.1-7.3-1.8-1.8-5-2-8.9-.6-1.5.6-3 1.4-4.6 2.3-1.5-1-3.1-1.8-4.6-2.3-3.9-1.5-7-1.3-8.9.6C-.1 5.2.8 10.4 4.3 16c-1 1.5-1.8 3.1-2.3 4.6-1.5 3.9-1.3 7 .6 8.9 1 1 2.5 1.5 4.2 1.5 1.4 0 2.9-.3 4.7-1 3.6-1.4 7.6-4 11.1-7.6l.5-.5V24c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1s.4 1 1 1h3.1l-1 1.1c-3.3 3.3-7 5.8-10.4 7.1-3.1 1.1-5.6 1.1-6.8-.2-1.2-1.2-1.3-3.7-.1-6.8.4-1.1 1-2.3 1.7-3.5 1 1.4 2.2 2.8 3.5 4.2H6c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1s-1 .4-1 1V20a29.7 29.7 0 01-3.3-4.1 38.8 38.8 0 019.4-9.3c1.7 1.2 3.4 2.6 5.1 4.2 3.3 3.3 5.8 7 7.1 10.4 1.2 3.1 1.1 5.5-.1 6.8-1.3 1.3-4 1.3-7.3-.1-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3 2 .8 3.8 1.2 5.3 1.2 1.7 0 3.2-.5 4.2-1.5 3.6-3.6.6-12.4-7-19.9a56.5 56.5 0 00-4.8-4zm-8.3 4a43.3 43.3 0 00-4 4.7C2.8 9.6 2.3 5.6 4 4c1.2-1.2 3.7-1.3 6.8-.1 1.1.4 2.3 1 3.5 1.7a29.3 29.3 0 00-4.8 3.9z" />
                </svg>
            }
        </div>
    );
}

export default MovementControl;
