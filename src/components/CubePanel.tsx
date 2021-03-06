import React from 'react';
import { useAtom } from 'jotai';
import { colorsAtom, cubeDAtom, cubeHAtom, cubeWAtom, angleAtom, shadowRatioAtom, showGeneratedAtom, generatedNameAtom, showingTestAtom, generatedTextAtom } from '../atoms';
import CubeModel from './CubeModel';
import CopyButton from './CopyButton';
import Axes from './Axes';
import Eyes from './Eyes';

function CubeView() {
    const [width] = useAtom(cubeWAtom);
    const [height] = useAtom(cubeHAtom);
    const [depth] = useAtom(cubeDAtom);
    const [color] = useAtom(colorsAtom);
    const [shadowRatio] = useAtom(shadowRatioAtom);
    const [angle] = useAtom(angleAtom);
    const [showGenerated] = useAtom(showGeneratedAtom);
    const [showingTest, showingTestSet] = useAtom(showingTestAtom);
    const [generatedName, generatedNameSet] = useAtom(generatedNameAtom);

    const [generatedText] = useAtom(generatedTextAtom);

    function handlePreview() {
        let testElm = document.getElementById('cube-test-place')!;
        if (!showingTest) {
            testElm.innerHTML = generatedText;
        } else {
            testElm.innerHTML = '';
        }
        showingTestSet((v: boolean) => !v);
    }

    return (
        <div className="relative h-full">
            {/* Generated text */}
            {showGenerated && <div className="absolute top-0 left-0 text-[.5rem] font-mono text-green-700 bg-gray-900 w-full h-full">
                <div className="absolute top-2 right-2 px-2 py-1 flex items-center space-x-1">
                    <input
                        className="p-1 border rounded-sm bg-gray-900 text-green-700 border-green-700 outline-none"
                        value={generatedName}
                        onChange={(event) => generatedNameSet(event.target.value)}
                    />

                    <CopyButton forId="generated-source" className="px-2 py-1 rounded-sm border border-green-700" />

                    <button
                        className="px-2 py-1 rounded-sm border border-green-700 pointer-events-auto flex items-center space-x-2"
                        onClick={handlePreview}
                    >
                        <Eyes open={showingTest} />
                        <span>Preview</span>
                    </button>
                </div>
                <pre id="generated-source" className="px-1 py-1 overflow-x-auto">
                    {generatedText}
                </pre>
            </div>}

            {/* Cube and Axes */}
            <div className="w-[400px] h-[400px] ml-auto pointer-events-none">
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
