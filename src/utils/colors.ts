export type ColorRGB = {
    r: number;  // [0..255]
    g: number;  // [0..255]
    b: number;  // [0..255]
    a: number; // [0..1]
};

export type ColorHSL = {
    h: number;  // [0..360]
    s: number;  // [0..100] integer as %
    l: number;  // [0..100] integer as %
    a?: number; // [0..1]
};

export function hexaToRgba(value: string): ColorRGB | undefined {
    var valid = /(^#{0,1}[0-9A-F]{6,8}$)|(^#{0,1}[0-9A-F]{3,4}$)/i.test(value);
    if (!valid) {
        return;
    }

    if (value[0] === '#') {
        value = value.slice(1);
    }

    if (value.length === 3) {
        value = value.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i, '$1$1$2$2$3$3');
    }
    else if (value.length === 4) {
        value = value.replace(/([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i, '$1$1$2$2$3$3$4$4');
    }

    return  {
        r: parseInt(value.substr(0, 2), 16),
        g: parseInt(value.substr(2, 2), 16),
        b: parseInt(value.substr(4, 2), 16),
        a: value.length === 8 ? parseInt(value.substr(6, 2), 16) / 255 : 1
    };
}

export function rgbaToHsla(value: ColorRGB): ColorHSL {
    let r = value.r / 255;
    let g = value.g / 255;
    let b = value.b / 255;

    let cmax = Math.max(r, g, b);
    let cmin = Math.min(r, g, b);
    let delta = cmax - cmin;
    let hue = 0;
    let saturation = 0;
    let lightness = (cmax + cmin) / 2;

    if (delta) { // else min === max -> hue = saturation = 0 i.e. achromatic
        if (cmax === r) { hue =     (g - b) / delta; }
        if (cmax === g) { hue = 2 + (b - r) / delta; }
        if (cmax === b) { hue = 4 + (r - g) / delta; }
        if (cmax) {
            let X = (1 - Math.abs(2 * lightness - 1));
            saturation = delta / X;
        }
    }

    hue = Math.round(60 * hue);
    if (hue < 0) {
        hue += 360;
    }

    let c: ColorHSL = {
        h: hue,
        s: Math.round(saturation * 100),
        l: Math.round(lightness * 100),
    };
    if (value.a || value.a === 0) {
        c.a = value.a;
    }
    return c;
}

    // let base = hexaToRgba('#FDF5E6'); //'oldlace' 'hsl(39, 85.2%, 94.7%)'
    // let hsl = rgbaToHsla(base);
    // console.log('c', base, hsl);
