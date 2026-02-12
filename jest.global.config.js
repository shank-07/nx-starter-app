module.exports = {
	displayName: 'global-jest',
	testMatch: ['<rootDir>/**/*.jest.spec.{ts,tsx}'],
	transform: {
		'^.+\\.[tj]sx?$': ['ts-jest', {
			tsconfig: '<rootDir>/tsconfig.base.json',
			compilerOptions: {
				esModuleInterop: true,
				allowSyntheticDefaultImports: true,
			}
		}],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
