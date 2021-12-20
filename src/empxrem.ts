export function scaleValue(val: number, scaleBase = 16) {
    const size = val / scaleBase;
    return size.toFixed(4);
}

export function pxToRem(px: number, baseFontSize = 16): string {
    return `${scaleValue(px, baseFontSize)}rem`;
}

export function pxToEm(px: number, baseFontSize = 16): string {
    return `${scaleValue(px, baseFontSize)}em`;
}

function ensureNot(
    unit: number | string,
    baseFontSize = 16,
    // eslint-disable-next-line no-unused-vars
    convert: (px: number, baseFontSize: number) => string) {
    let val: number;
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            val = parseFloat(unit.replace('px', ''));
        } else {
            val = parseFloat(unit);
        }
    } else {
        val = unit;
    }
    return convert(val, baseFontSize);
}


export function ensureNotPxRem(unit: number | string, baseFontSize = 16): string {
    return ensureNot(unit, baseFontSize, pxToRem);
}

export function ensureNotPxEm(unit: number | string, baseFontSize = 16): string {
    return ensureNot(unit, baseFontSize, pxToEm);
}
