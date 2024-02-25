/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  clearMocks: true,
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!**/migrations/**/*.{js,ts}',
    '!**/*.entity.{js,ts}'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },


};