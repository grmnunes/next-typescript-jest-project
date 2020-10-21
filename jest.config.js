module.exports = {
  testEnvironment: 'jsdom', //tipo de ambiente de teste ->  browser dom
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupfilesAfterEnv:  ['<rootDir>/.jest/setup.ts']
}
