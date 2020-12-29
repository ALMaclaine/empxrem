import * as npmUtils from '../src';

describe('empxrem', () => {
  it('Has Correct API', () => {
    const keys = Object.keys(npmUtils);
    expect(keys.length).toBe(4);
    expect(keys).toMatchSnapshot();
  });
});
