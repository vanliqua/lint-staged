const config = {
  collectCoverageFrom: [
    'lib/**/*.js',
    // Instanbul uses babel to parse coverage data,
    // so `import.meta` is not available
    '!lib/resolveConfig.js',
  ],
  moduleDirectories: ['node_modules'],
  setupFiles: ['./testSetup.js'],
  snapshotSerializers: ['jest-snapshot-serializer-ansi'],
  testEnvironment: 'node',
  transform: {},
}

export default config
