import { CubeModelProps, FaceStyles, getCubeParentStyles, getCubeStyles } from '../components/CubeModel';

function objectToCss<T extends object>(obj: Exclude<T, any[] | Function>): string {
    return JSON.stringify(obj, null, 4)
        .replace(/"/g, '')
        .replace(/,$/mg, ';')
        .replace(/((?:\r?\n)\s*)};?/mg, ';$1}')
        .replace(/};((?:\r?\n)\s*)}/mg, '}$1}');
}

export function lagacyGenerator(cubeProps: CubeModelProps): string {
    /* CSS */
    let parentProps = {
        ...getCubeParentStyles(cubeProps),
        'background-color': 'rgba(calc(var(--faceR) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceG) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceB) - calc(var(--shadowRatio) * var(--faceWeight))), var(--faceA))'
    }
    let parent = `.cube ${objectToCss(parentProps)}`;

    let face = `.cube > div ${objectToCss({
        position: 'absolute',
    })}`;

    const styles: FaceStyles = getCubeStyles(cubeProps);

    let faces = [...Object.entries(styles)].map(([key, value]) => `.cube__${key} ${objectToCss(value)}`).join('\n');

    /* HTML */

    let html = `
        /* HTML */

        <div class="cube">
            <div class="cube__face cube__f"></div> <!-- _front_ -->
            <div class="cube__face cube__l"></div> <!-- _left__ -->
            <div class="cube__face cube__t"></div> <!-- _top___ -->
            <div class="cube__face cube__b"></div> <!-- _bottom -->
            <div class="cube__face cube__r"></div> <!-- _right_ -->
            <div class="cube__face cube__k"></div> <!-- _back__ -->
        </div>`.replace(/^[ \t]{12,13}/gm, '');

    return `/* CSS */\n\n${parent}\n\n${face}\n\n${faces}\n${html}`;
}
