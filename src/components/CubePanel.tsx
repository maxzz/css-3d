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
                    <div style={{ transformStyle: 'preserve-3d',transform: 'translateX(50px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={100} height={5} depth={5} color={{ r: 0xe6, g: 0x55, b: 0x55, a: 0.3 }} shadowRatio={shadowRatio} />
                    </div>
                    {/* y: green */}
                    <div style={{ transformStyle: 'preserve-3d', transform: 'translateY(-50px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={5} height={100} depth={5} color={{ r: 0, g: 0xff, b: 0, a: 0.3 }} shadowRatio={shadowRatio} />
                    </div>
                    {/* z: blue */}
                    <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-50px)' }}>
                        <CubeModel angle={{ x: 0, y: 0 }} width={5} height={5} depth={100} color={{ r: 0x71, g: 0x71, b: 0xe6, a: 0.5 }} shadowRatio={shadowRatio} />
                    </div>
                    {/* #7171e6 */}
                </div>
            </div>
        </div>
    );
}

export default CubeView;
