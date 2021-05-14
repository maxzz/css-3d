import React from 'react';
import { useAtom } from 'jotai';
import { cubeDAtom, cubeHAtom, cubeWAtom, rotAtom, showGeneratedAtom } from '../atoms';
import CubeModel, { getCubeStyles } from './CubeModel';

function CubeView() {
    const [rotation] = useAtom(rotAtom);

    const [width] = useAtom(cubeWAtom);
    const [height] = useAtom(cubeHAtom);
    const [depth] = useAtom(cubeDAtom);

    const [showGenerated] = useAtom(showGeneratedAtom);

    function showSource() {
        const styles = getCubeStyles({
            width,
            height,
            depth,
            rotateX: rotation.x,
            rotateY: rotation.y,
            color: '#ff000080',
        });
    
        // convert JSON to CSS
        let text = JSON.stringify(styles, null, 4)
            .replace(/"/g, '')
            .replace(/,$/mg, ';')
            .replace(/((?:\r?\n)\s*)};?/mg, ';$1}')
            .replace(/};((?:\r?\n)\s*)}/mg, '}$1}');

        return text;
    }

    return (
        <div className="relative h-full">
            <CubeModel rotateX={rotation.x} rotateY={rotation.y} width={width} height={height} depth={depth} />
            {/* <div className="px-4">x:{rotation.x} y:{rotation.y}</div> */}
            <div className="absolute top-0 left-0 text-[.5rem] font-mono text-green-700">
                <pre>
                    {showGenerated && showSource()}
                </pre>
            </div>
        </div>
    );
}

export default CubeView;
