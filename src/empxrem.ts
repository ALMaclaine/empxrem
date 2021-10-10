function pxToRelative(px: number, baseFontSize = 16) {
    const size = px / baseFontSize;
    return size.toFixed(4);
}

export function pxToRem(px: number, baseFontSize = 16): string {
    return `${pxToRelative(px, baseFontSize)}rem`;
}

export function pxToEm(px: number, baseFontSize = 16): string {
    return `${pxToRelative(px, baseFontSize)}em`;
}

export function ensureNotPxRem(unit: number | string, baseFontSize: number): string {
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

export function ensureNotPxEm(unit: number | string, baseFontSize: number): string {
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
