import React from 'react';
import { useAtom } from 'jotai';
import { cubeDAtom, cubeHAtom, cubeWAtom, rotAtom, showGeneratedAtom } from '../atoms';
import CubeModel, { getCubeStyles } from './CubeModel';
import CopyButton from './CopyButton';

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
            {showGenerated && <div className="absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full">
                <CopyButton className="absolute top-1 right-1 px-2 py-1 
                    rounded-sm border border-green-700 " forId="generated-source" />
                <pre id="generated-source">
                    {showSource()}
                </pre>
            </div>}
            <div className={`z-10 absolute transform ${showGenerated ? 'top-28 right-28 scale-[.2]' : 'top-1/2 right-1/2 scale-[.8]'}`}>
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} width={width} height={height} depth={depth} />
            </div>
            {/* <div className="px-4">x:{rotation.x} y:{rotation.y}</div> */}
        </div>
    );
}

export default CubeView;
