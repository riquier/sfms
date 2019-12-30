module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: [
    "/src/index.ts",
    "/src/cmds",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: -1,
      statements: -1,
    },
  },
};
