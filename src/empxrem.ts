function pxToRelative(px: number, baseFontSize: number = 16, min?: number) {
    let size = px / baseFontSize;
    size = min && size < min ? min : size;
    return size.toFixed(4);
}

export function pxToRem(px: number, baseFontSize: number = 16, min?: number) {
    return `${pxToRelative(px, baseFontSize, min)}rem`;
}

export function pxToEm(px: number, baseFontSize: number = 16, min?: number) {
    return `${pxToRelative(px, baseFontSize, min)}em`;
}

export function ensureNotPxRem(unit: number | string, baseFontSize: number, min?: number) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val, baseFontSize, min);
        }
    } else {
        unit = pxToRem(unit, baseFontSize, min);
    }
    return unit;
}

export function ensureNotPxEm(unit: number | string, baseFontSize: number, min?: number) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToEm(val, baseFontSize, min);
        }
    } else {
        unit = pxToEm(unit, baseFontSize, min);
    }
    return unit;
}
