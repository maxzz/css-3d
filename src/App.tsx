import React from 'react';
import './App.scss';
import MovementControl from './components/MovementControl';
import CubeView from './components/CubePanel';
import LogoPlay from './components/LogoPlay';
import SliderGroup from './components/slider/SliderGroup';
import { useAtom } from 'jotai';
import { rotAtom, showGeneratedAtom } from './atoms';

function App() {
    const [showGen, showGenSet] = useAtom(showGeneratedAtom);
    const [rotation] = useAtom(rotAtom);
    return (
        <>
            <div className="bg-gray-100 h-screen flex flex-col">
                {/* Header */}
                <div className="flex items-center bg-gray-200 shadow-md dark z-10 border-b border-green-800">
                    {/* Logo */}
                    <div className="w-8 h-8 ml-2 flex-none">
                        <LogoPlay />
                    </div>

                    {/* Title */}
                    <div
                        className="flex-1 ml-2 justify-self-center text-xl tracking-tighter uppercase text-gray-500 select-none"
                        style={{textShadow: '#1ec13652 2px 2px 2px'}}
                    >
                        CSS 3D shapes
                    </div>

                    {/* Controls */}
                    <div className="flex-0 py-2">

                        <div className="flex">
                            <SliderGroup />
                            {/* Movement control */}
                            <div className="flex-0 my-2 ml-1 mr-2 relative">
                                <MovementControl />
                                <div className="text-[.5rem] absolute w-full flex justify-center space-x-1 text-dark-label">
                                    <div className="w">x: {rotation.y}</div>
                                    <div className="w">y: {rotation.x}</div>
                                </div>
                            </div>
                        </div>

                        <div className="pl-2">
                            <label className="font-mono text-[.7rem] text-gray-500 flex items-center">
                                <input type="checkbox" checked={showGen} onChange={(ev) => showGenSet(ev.target.checked)} />
                                <span className="ml-1">Show generated</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                {/* Model */}
                <div className="flex-1 relative">
                    <CubeView />
                </div>
            </div>

            {/* <div className="absolute left-0 top-0 w-1/2 h-[259px] border border-dotted border-yellow-500 z-40"></div> */}
        </>
    );
}

export default App;
