const { getJestProjectsAsync } = require('@nx/jest');

module.exports = async () => {
  // We still provide the projects for Nx-based execution
  const nxProjects = await getJestProjectsAsync();
  
  return {
    projects: [
      ...nxProjects,
      {
        displayName: 'global-jest',
        testMatch: ['<rootDir>/**/*.jest.spec.ts'],
        transform: {
          '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.base.json' }],
        },
        moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
      },
    ],
  };
};
