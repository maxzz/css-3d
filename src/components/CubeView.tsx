import React from 'react';
import { useAtom } from 'jotai';
import { rotAtom } from '../atoms';
import CubeModel from './CubeModel';

function CubeView() {
    const [rotation] = useAtom(rotAtom);
    return (
        <div>
            <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
            
            <div className="px-4">x:{rotation.x} y:{rotation.y}</div>
        </div>
    );
}

export default CubeView;
