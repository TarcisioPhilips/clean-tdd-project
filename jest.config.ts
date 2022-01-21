
export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rooDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testenvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'

  }

}
