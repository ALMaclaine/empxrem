export function pxToRem(px: number, baseFontSize: number = 16) {
    return `${px / baseFontSize}rem`;
}

export function pxToEm(px: number, baseFontSize: number = 16) {
    return `${px / baseFontSize}em`;
}

export function ensureNotPx(unit: number | string) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val);
        }
    } else {
        unit = pxToRem(unit);
    }
    return unit;
}

export function ensureNotPxEm(unit: number | string) {
    if (typeof unit === 'string') {
        if (unit.includes('px')) {
            const val = parseFloat(unit.replace('px', ''));
            unit = pxToRem(val);
        }
    } else {
        unit = pxToEm(unit);
    }
    return unit;
}
