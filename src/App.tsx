import React, { useEffect, useState } from 'react';
import './App.css';
import MovementControl from './components/MovementControl';
import CubeModel from './components/CubeModel';

function App() {
    return (
        <div className="bg-gray-200 h-screen flex flex-col">
            <MovementControl />
            <div className="flex-1 relative">
                <CubeModel />
            </div>
        </div>
    );
}

export default App;
