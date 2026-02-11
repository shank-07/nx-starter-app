import { jestDemo } from './jest-demo.js';

describe('jestDemo', () => {
  it('should work', () => {
    expect(jestDemo()).toEqual('jest-demo');
  });
});
