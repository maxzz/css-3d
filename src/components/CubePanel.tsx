import React from 'react';
import { useAtom } from 'jotai';
import { colorsAtom, cubeDAtom, cubeHAtom, cubeWAtom, angleAtom, shadowRatioAtom, showGeneratedAtom } from '../atoms';
import CubeModel from './CubeModel';
import CopyButton from './CopyButton';
import { lagacyGenerator } from '../utils/text-generator-legacy';

function CubeView() {
    const [width] = useAtom(cubeWAtom);
    const [height] = useAtom(cubeHAtom);
    const [depth] = useAtom(cubeDAtom);
    const [color] = useAtom(colorsAtom);
    const [shadowRatio] = useAtom(shadowRatioAtom);
    const [angle] = useAtom(angleAtom);
    const [showGenerated] = useAtom(showGeneratedAtom);

    function showSource() {
        const cubeProps = {
            width,
            height,
            depth,
            color: color,
            shadowRatio,
            angle,
        };
        return lagacyGenerator(cubeProps);
    }

    return (
        <div className="relative h-full pointer-events-none">
            {/* Generated text */}
            {showGenerated && <div className="absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full">
                <CopyButton forId="generated-source" className="absolute top-2 right-2 px-2 py-1 rounded-sm border border-green-700 " />
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
                <div className={`w-full h-full`}
                    style={{
                        transformStyle: 'preserve-3d',
                        //perspective: '100px',
                        transform: `scale(.2) rotateX(${angle.x}deg) rotateY(${angle.y}deg)`,
                    }}
                >
                    {/* x: red */}
                    <div className="" style={{ transformStyle: 'preserve-3d',transform: 'translateX(250px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={500} height={10} depth={10} color={{ r: 0xff, g: 0, b: 0, a: 0.1 }} shadowRatio={shadowRatio} />
                    </div>
                    {/* y: green */}
                    <div className="" style={{ transformStyle: 'preserve-3d', transform: 'translateY(-250px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={10} height={500} depth={10} color={{ r: 0, g: 0xff, b: 0, a: 0.1 }} shadowRatio={shadowRatio} />
                    </div>
                    {/* z: blue */}
                    <div className="" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-250px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={10} height={10} depth={500} color={{ r: 0, g: 0, b: 0xff, a: 0.3 }} shadowRatio={shadowRatio} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CubeView;