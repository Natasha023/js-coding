module.exports = {
    projects: [
      '<rootDir>'
    ],
    testPathIgnorePatterns: [
      '<rootDir>/dist/',
      '/node_modules/',
      '/dist/'
    ],
    coveragePathIgnorePatterns: [
      '<rootDir>/dist/',
      '/node_modules/',
      '/dist/'
    ],
    moduleDirectories: [
        "node_modules",
        "client/src/app"
    ],
    collectCoverageFrom: [
      'src/**/*.js',
      '!**/node_modules/**',
    ],
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    setupFiles: [
      './testSetup.js',
    ],
    snapshotSerializers: [
      'enzyme-to-json/serializer'
    ],
    moduleNameMapper: { '\\.(css|less|sass)$': '<rootDir>/assets/css/__mocks__/styleMock.js' },
    clearMocks: true,
    verbose: true,
    testURL: 'http://localhost/'
  };
  