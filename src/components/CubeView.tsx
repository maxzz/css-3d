import React from 'react';
import { useAtom } from 'jotai';
import { cubeDAtom, cubeHAtom, cubeWAtom, rotAtom, showGeneratedAtom } from '../atoms';
import CubeModel, { getCubeStyles } from './CubeModel';
import CopyButton from './CopyButton';

function objectToCss<T extends object>(json: Exclude<T, any[]>): string {
    let text = JSON.stringify(json, null, 4)
        .replace(/"/g, '')
        .replace(/,$/mg, ';')
        .replace(/((?:\r?\n)\s*)};?/mg, ';$1}')
        .replace(/};((?:\r?\n)\s*)}/mg, '}$1}');
    return text;
}

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
        }) as Record<string, Record<string, string | number>>;

        let keys = [...Object.entries(styles)].map(([key, value]) => {
            let text = JSON.stringify(value, null, 4)
                .replace(/"/g, '')
                .replace(/,$/mg, ';')
                .replace(/((?:\r?\n)\s*)};?/mg, ';$1}')
                .replace(/};((?:\r?\n)\s*)}/mg, '}$1}');
            return `${key}: ${objectToCss(value)}`;
        });
        //keys.forEach((v) => console.log(v));
        //console.log(objectToCss(['a','a','c']));
        //console.log(objectToCss('aa'));
        //console.log(objectToCss(5));
    
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
                <CopyButton forId="generated-source" className="absolute top-2 right-2 px-2 py-1 rounded-sm border border-green-700 " />
                <pre id="generated-source" className="py-1">
                    {showSource()}
                </pre>
            </div>}
            {/* Mini cube */}
            <div className={`z-10 absolute transform ${showGenerated ? 'top-28 right-28 scale-[.2]' : 'top-1/2 right-1/2 scale-[.8]'}`}>
                <CubeModel rotateX={rotation.x} rotateY={rotation.y} width={width} height={height} depth={depth} />
            </div>
            {/* <div className="px-4">x:{rotation.x} y:{rotation.y}</div> */}
        </div>
    );
}

export default CubeView;
