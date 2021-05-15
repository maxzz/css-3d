import React, { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { rotActiveAtom, rotAtom } from '../atoms';

function MovementControl() {
    const [rotation, rotationSet] = useAtom(rotAtom);
    const [rotActive, rotActiveSet] = useAtom(rotActiveAtom);

    const containerRef = useRef<HTMLDivElement>(null);
    const downPt = useRef<{ x: number; y: number; }>();

    useEffect(() => {
        if (rotActive && containerRef.current) {
            let prev;
            function onMove(ev: MouseEvent) {
                const rot = {
                    x: ev.clientX - downPt.current!.x,
                    y: ev.clientY - downPt.current!.y,
                };
                if (ev.shiftKey) {
                    if (rot.x > rot.y) {
                        rot.y = rotation.y;
                    } else {
                        rot.x = rotation.x;
                    }
                }
                //console.log('shift', ev.shiftKey);

                rotationSet({ x: rot.y, y: rot.x });
            }
            function onDone() {
                rotActiveSet(false);
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
            className={`
                text-gray-800 bg-gray-400 active:bg-gray-200
                border rounded-md border-gray-400
                cursor-pointer relative`
            }
            onMouseDown={(ev: React.MouseEvent) => {
                if (!ev.ctrlKey) {
                    ev.preventDefault();
                    downPt.current = { x: ev.clientX + rotation.y, y: ev.clientY + rotation.x };
                    rotActiveSet(true);
                }
            }}
            onClick={(ev: React.MouseEvent) => {
                if (ev.ctrlKey) {
                    rotationSet({ x: 0, y: 0 });
                }
            }}
            title="Drag - rotate; Ctrl+Click - reset rotation"
        >
            {rotActive
                ?
                <div className="w-12 h-12 text-red-800 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" fill="none" strokeWidth="1" stroke="currentColor">
                        <path d="M47.3 35.4c-.6 0-1-.4-1-1v-6.1c0-.2-.1-.3-.3-.3h-4.7c-.8 0-1.3-1-.8-1.6l9.2-11.5c.2-.2.5-.4.8-.4.3 0 .6.1.8.4l9.2 11.5c.5.6 0 1.7-.8 1.6H55c-.2 0-.3.1-.3.3v6.1c0 .6-.4 1-1 1h-6.4zM53.7 65.6c.6 0 1 .4 1 1v6.1c0 .2.1.3.3.3h4.7c.8 0 1.3 1 .8 1.6l-9.2 11.5c-.2.2-.5.4-.8.4a1 1 0 01-.8-.4l-9.2-11.5c-.5-.6 0-1.6.8-1.6H46c.2 0 .3-.1.3-.3v-6.1c0-.6.4-1 1-1h6.4zM35.4 53.6c0 .6-.4 1-1 1h-6.1c-.2 0-.3.1-.3.3v4.7c0 .8-1 1.3-1.6.8l-11.5-9.2c-.2-.2-.4-.5-.4-.8 0-.3.1-.6.4-.8l11.5-9.2c.6-.5 1.7 0 1.6.8v4.7c0 .2.1.3.3.3h6.1c.6 0 1 .4 1 1v6.4zM65.6 47.3c0-.6.4-1 1-1h6.1c.2 0 .3-.1.3-.3v-4.7c0-.8 1-1.3 1.6-.8l11.5 9.2c.2.2.4.5.4.8 0 .3-.1.6-.4.8l-11.5 9.2c-.6.5-1.6 0-1.6-.8V55c0-.2-.1-.3-.3-.3h-6.1c-.6 0-1-.4-1-1v-6.4z" />
                        <g stroke="none">
                            <path fill="#bd8877" d="M48.7 58.1l-6.1-3.4V44.3l6.1 3.3z" />
                            <path fill="#d79e8c" d="M48.7 47.6l-6.1-3.3 9.7-1.4 6.1 3.4z" />
                            <path fill="#a17163" d="M58.4 46.3v10.4l-9.7 1.4V47.6z" />
                        </g>
                        <path d="M58.4 46.2v10.5l-9.7 1.4-6.1-3.4V44.3l9.7-1.4z" />
                    </svg>
                </div>
                :
                <div className="w-12 h-12 p-2">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                        <path d="M17.8 5.5c1.2-.7 2.3-1.3 3.5-1.7 3-1.1 5.5-1.1 6.7.2 1 1 1.2 2.9.6 5.4-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.9-3.2.5-5.7-1.1-7.3-1.8-1.8-5-2-8.9-.6-1.5.6-3 1.4-4.6 2.3-1.5-1-3.1-1.8-4.6-2.3-3.9-1.5-7-1.3-8.9.6C-.1 5.2.8 10.4 4.3 16c-1 1.5-1.8 3.1-2.3 4.6-1.5 3.9-1.3 7 .6 8.9 1 1 2.5 1.5 4.2 1.5 1.4 0 2.9-.3 4.7-1 3.6-1.4 7.6-4 11.1-7.6l.5-.5V24c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1s.4 1 1 1h3.1l-1 1.1c-3.3 3.3-7 5.8-10.4 7.1-3.1 1.1-5.6 1.1-6.8-.2-1.2-1.2-1.3-3.7-.1-6.8.4-1.1 1-2.3 1.7-3.5 1 1.4 2.2 2.8 3.5 4.2H6c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1s-1 .4-1 1V20a29.7 29.7 0 01-3.3-4.1 38.8 38.8 0 019.4-9.3c1.7 1.2 3.4 2.6 5.1 4.2 3.3 3.3 5.8 7 7.1 10.4 1.2 3.1 1.1 5.5-.1 6.8-1.3 1.3-4 1.3-7.3-.1-.5-.2-1.1 0-1.3.5-.2.5 0 1.1.5 1.3 2 .8 3.8 1.2 5.3 1.2 1.7 0 3.2-.5 4.2-1.5 3.6-3.6.6-12.4-7-19.9a56.5 56.5 0 00-4.8-4zm-8.3 4a43.3 43.3 0 00-4 4.7C2.8 9.6 2.3 5.6 4 4c1.2-1.2 3.7-1.3 6.8-.1 1.1.4 2.3 1 3.5 1.7a29.3 29.3 0 00-4.8 3.9z" />
                    </svg>
                </div>
            }
        </div>
    );
}

export default MovementControl;
