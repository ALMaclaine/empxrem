function pxToRelative(px: number, baseFontSize: number = 16) {
    let size = px / baseFontSize;
    return size.toFixed(4);
}

export function pxToRem(px: number, baseFontSize: number = 16) {
    return `${pxToRelative(px, baseFontSize)}rem`;
}

export function pxToEm(px: number, baseFontSize: number = 16) {
    return `${pxToRelative(px, baseFontSize)}em`;
}

export function ensureNotPxRem(unit: number | string, baseFontSize: number) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val, baseFontSize);
        }
    } else {
        unit = pxToRem(unit, baseFontSize);
    }
    return unit;
}

export function ensureNotPxEm(unit: number | string, baseFontSize: number) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToEm(val, baseFontSize);
        }
    } else {
        unit = pxToEm(unit, baseFontSize);
    }
    return unit;
}
