module.exports = {
  displayName: 'global-jest',
  testMatch: ['<rootDir>/**/*.jest.spec.ts'],
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.base.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  testEnvironment: 'node',
};
