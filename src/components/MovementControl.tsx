import React, { useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { rotationActiveAtom, angleAtom } from '../atoms';

function MovementControl() {
    const [angle, rotationSet] = useAtom(angleAtom);
    const [rotActive, rotActiveSet] = useAtom(rotationActiveAtom);

    const containerRef = useRef<HTMLDivElement>(null);
    const downPt = useRef<{ x: number; y: number; }>();

    useEffect(() => {
        if (rotActive && containerRef.current) {
            function onMove(ev: MouseEvent) {
                //console.log('mouse', { x: ev.clientX, y: ev.clientY }, 'angle', angle);
                const rot = {
                    x: ev.clientX - downPt.current!.x,
                    y: ev.clientY - downPt.current!.y,
                };
                if (ev.shiftKey) {
                    if (rot.x > rot.y) {
                        rot.y = angle.y;
                    } else {
                        rot.x = angle.x;
                    }
                }
                rotationSet({ x: -rot.y, y: -rot.x });
            }
            function onDone() {
                rotActiveSet(false);
                document.removeEventListener('mouseup', onDone);
            }
            window.addEventListener('mousemove', onMove, false); //TODO: why window and not documnet?
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
                bg-gradient-radial
                from-[#2f93724d] to-transparent
                active:from-[#7f7f7f8f] active:to-[#000000f7]
                transform
                active:scale-95
                transition-all duration-100
                border rounded-md border-gray-400
                cursor-pointer relative`
            }
            onMouseDown={(ev: React.MouseEvent) => {
                if (!ev.ctrlKey) {
                    ev.preventDefault();
                    downPt.current = { x: ev.clientX + angle.y, y: ev.clientY + angle.x };
                    //console.log(downPt.current, angle);
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
                <div className="w-12 h-12 text-gray-100 flex items-center justify-center">
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
                <div className="w-12 h-12 p-2 text-gray-300 hover:text-gray-100">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" >
                        <ellipse cx="50" cy="50" rx="44.4" ry="13.2" />
                        <ellipse cx="50" cy="50" rx="12.3" ry="44.4" />
                        <path d="M53.7 54.3l8.6-8.6 5 7.5M29.9 66.9l-8.2-6.7 9.1-4.4" />
                    </svg>
                </div>
            }
        </div>
    );
}

export default MovementControl;
