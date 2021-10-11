export function scaleValue(val: number, scaleBase: number = 16) {
    const size = val / scaleBase;
    return size.toFixed(4);
}

export function pxToRem(px: number, baseFontSize = 16): string {
    return `${scaleValue(px, baseFontSize)}rem`;
}

export function pxToEm(px: number, baseFontSize = 16): string {
    return `${scaleValue(px, baseFontSize)}em`;
}

export function ensureNotPxRem(unit: number | string, baseFontSize: number = 16): string {
    let out = '';
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            out = pxToRem(val, baseFontSize);
        }
    } else {
        out = pxToRem(unit, baseFontSize);
    }
    return out;
}

export function ensureNotPxEm(unit: number | string, baseFontSize: number = 16): string {
    let out = '';
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            out = pxToEm(val, baseFontSize);
        }
    } else {
        out = pxToEm(unit, baseFontSize);
    }
    return out;
}
