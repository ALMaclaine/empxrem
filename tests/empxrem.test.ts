import * as npmUtils from '../src';

describe('empxrem', () => {
    it('Has Correct API', () => {
        const keys = Object.keys(npmUtils);
        expect(keys.length).toBe(5);
        expect(keys).toMatchSnapshot();
    });

    it('scaleValue scales correctly', () => {
        expect(npmUtils.scaleValue(16)).toBe('1.0000');
        expect(npmUtils.scaleValue(10, 10)).toBe('1.0000');
        expect(npmUtils.scaleValue(10)).toBe('0.6250');
    });

    it('pxToRem converts correctly', () => {
        expect(npmUtils.pxToRem(16)).toBe('1.0000rem');
        expect(npmUtils.pxToRem(10, 10)).toBe('1.0000rem');
        expect(npmUtils.pxToRem(10)).toBe('0.6250rem');
    });

    it('pxToEm converts correctly', () => {
        expect(npmUtils.pxToEm(16)).toBe('1.0000em');
        expect(npmUtils.pxToEm(10, 10)).toBe('1.0000em');
        expect(npmUtils.pxToEm(10)).toBe('0.6250em');
    });

    it('ensureNotPxRem converts correctly', () => {
        expect(npmUtils.ensureNotPxRem(16)).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem(10, 10)).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem(10)).toBe('0.6250rem');

        expect(npmUtils.ensureNotPxRem('16px')).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem('10px', 10)).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem('10px')).toBe('0.6250rem');

        expect(npmUtils.ensureNotPxRem('16')).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem('10', 10)).toBe('1.0000rem');
        expect(npmUtils.ensureNotPxRem('10')).toBe('0.6250rem');
    });

    it('ensureNotPxEm converts correctly', () => {
        expect(npmUtils.ensureNotPxEm(16)).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm(10, 10)).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm(10)).toBe('0.6250em');

        expect(npmUtils.ensureNotPxEm('16px')).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm('10px', 10)).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm('10px')).toBe('0.6250em');

        expect(npmUtils.ensureNotPxEm('16')).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm('10', 10)).toBe('1.0000em');
        expect(npmUtils.ensureNotPxEm('10')).toBe('0.6250em');
    });
});
