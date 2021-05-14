import React from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeView from './components/CubeView';
import LogoPlay from './components/LogoPlay';
import SliderGroup from './components/slider/SliderGroup';
import { useAtom } from 'jotai';
import { showGeneratedAtom } from './atoms';

function App() {
    const [showGen, showGenSet] = useAtom(showGeneratedAtom);
    return (
        <>
            <div className="bg-gray-100 h-screen flex flex-col">
                {/* Header */}
                <div className="flex items-center bg-gray-200 shadow-md">
                    {/* Logo */}
                    <div className="w-32 pt-2">
                        <LogoPlay />
                    </div>

                    {/* Title */}
                    <div className="flex-1 ml-4 justify-self-center text-xl tracking-tighter uppercase text-pink-700 select-none">
                        CSS 3D shapes
                    </div>

                    {/* Controls */}
                    <div className="flex-0 py-2">

                        <div className="flex">
                            <SliderGroup />
                            {/* Movement control */}
                            <div className="flex-0 my-4 ml-1 mr-5">
                                <MovementControl />
                            </div>
                        </div>

                        <div className="-mt-2 pl-2">
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
