import React from 'react';
import { useAtom } from 'jotai';
import { colorsAtom, cubeDAtom, cubeHAtom, cubeWAtom, angleAtom, shadowRatioAtom, showGeneratedAtom, generatedNameAtom } from '../atoms';
import CubeModel from './CubeModel';
import CopyButton from './CopyButton';
import { lagacyGenerator } from '../utils/text-generator-legacy';
import Axes from './Axes';

function CubeView() {
    const [width] = useAtom(cubeWAtom);
    const [height] = useAtom(cubeHAtom);
    const [depth] = useAtom(cubeDAtom);
    const [color] = useAtom(colorsAtom);
    const [shadowRatio] = useAtom(shadowRatioAtom);
    const [angle] = useAtom(angleAtom);
    const [showGenerated] = useAtom(showGeneratedAtom);
    const [generatedName] = useAtom(generatedNameAtom);

    function showSource() {
        const cubeProps = {
            width,
            height,
            depth,
            color: color,
            shadowRatio,
            angle,
        };
        return lagacyGenerator(cubeProps, generatedName);
    }

    return (
        <div className="relative h-full pointer-events-none">
            {/* Generated text */}
            {showGenerated && <div className="absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full">
                <CopyButton forId="generated-source" className="absolute top-2 right-2 px-2 py-1 rounded-sm border border-green-700" />
                <pre id="generated-source" className="py-1">
                    {showSource()}
                </pre>
            </div>}

            {/* Cube and Axes */}
            <div className="w-[400px] h-[400px] ml-auto">
                {/* Mini cube */}
                <div className={`z-10 absolute select-none transform ${showGenerated ? 'top-32 right-28 scale-[.2]' : 'top-1/2 right-1/2 scale-[.8]'}`}>
                    <CubeModel angle={angle} width={width} height={height} depth={depth} color={color} shadowRatio={shadowRatio} />
                </div>
                {/* Axes */}
                <div className="w-full h-full">
                    <Axes angle={angle} />
                </div>
            </div>
        </div>
    );
}

export default CubeView;
