import React from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeView from './components/CubeView';
import LogoPlay from './components/LogoPlay';
import { Provider } from 'jotai';

function App() {
    return (
        // <Provider>
            <div className="bg-gray-200 h-screen flex flex-col">
                <div className="flex">
                    <div className="w-32 pt-2">
                        <LogoPlay />
                    </div>
                    <MovementControl />
                </div>
                <div className="flex-1 relative">
                    <CubeView />
                </div>
            </div>
        // </Provider>
    );
}

export default App;
