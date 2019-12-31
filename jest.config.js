module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: -15,
      lines: -15,
      statements: -15,
    },
  },
};
