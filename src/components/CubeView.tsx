import React from 'react';
import { useAtom } from 'jotai';
import { rotAtom } from '../atoms';
import CubeModel from './CubeModel';

function CubeView() {
    const [rotation] = useAtom(rotAtom);
    return (
        <div>
            <CubeModel rotateX={rotation.x} rotateY={rotation.y} />
        </div>
    );
}

export default CubeView;
