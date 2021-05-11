import React from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeView from './components/CubeView';
import LogoPlay from './components/LogoPlay';
import { Provider } from 'jotai';

function App() {
    return (
        <Provider>
            <div className="bg-gray-100 h-screen flex flex-col">
                <div className="flex items-center bg-gray-200 shadow-md">
                    <div className="w-32 pt-2">
                        <LogoPlay />
                    </div>
                    <div className="ml-4 justify-self-center text-xl tracking-tighter uppercase text-pink-700">CSS 3D shapes</div>
                    <MovementControl />
                </div>
                <div className="flex-1 relative">
                    <CubeView />
                </div>
            </div>
            {/* <div className="absolute left-0 top-0 w-1/2 h-[259px] border border-dotted border-yellow-500 z-40"></div> */}
        </Provider>
    );
}

export default App;
