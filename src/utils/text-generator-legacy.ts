import { CubeModelProps, FaceStyles, getCubeParentStyles, getCubeStyles } from './cube-defs';

function objectToCss<T extends object>(obj: Exclude<T, any[] | Function>): string {
    const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    let o = Object.fromEntries([...Object.entries(obj)].map(([key, val]) => [key.match(/^--/) ? key : camelToSnakeCase(key), val]));
    return JSON.stringify(o, null, 4)
        .replace(/"/g, '')
        .replace(/,$/mg, ';')
        .replace(/((?:\r?\n)\s*)};?/mg, ';$1}')
        .replace(/};((?:\r?\n)\s*)}/mg, '}$1}');
}

export function lagacyGenerator(cubeProps: CubeModelProps, className: string): string {
    /* CSS */

    className = className || 'cube';

    const parentProps = {
        ...getCubeParentStyles(cubeProps),
    };
    const parent = `.${className} ${objectToCss(parentProps)}`;

    let face = `.${className} > div ${objectToCss({
        position: 'absolute',
        backgroundColor: 'rgba(calc(var(--faceR) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceG) - calc(var(--shadowRatio) * var(--faceWeight))), calc(var(--faceB) - calc(var(--shadowRatio) * var(--faceWeight))), var(--faceA))',
        boxShadow: 'inset 2px 2px 14px 4px #00000038',
    })}`;

    const styles: FaceStyles = getCubeStyles(cubeProps);

    const faces = [...Object.entries(styles)].map(([key, value]) => `.${className}__${key} ${objectToCss(value)}`).join('\n');

    let stylesText = `<style>\n\n${parent}\n\n${face}\n\n${faces}\n\n</style>`; //.replace(/^((\s|\S)*)$/mg, '    $1');

    /* HTML */

    let html = `
        <div style="height: 256px; display: flex; align-items: center; justify-content: center">
            <div class="${className}">
                <div class="${className}__f"></div> <!-- _front_ -->
                <div class="${className}__l"></div> <!-- _left__ -->
                <div class="${className}__t"></div> <!-- _top___ -->
                <div class="${className}__b"></div> <!-- _bottom -->
                <div class="${className}__r"></div> <!-- _right_ -->
                <div class="${className}__k"></div> <!-- _back__ -->
            </div>
        </div>`.replace(/^[ \t]{8,9}/gm, '');

    return `${stylesText}\n${html}`;
}
