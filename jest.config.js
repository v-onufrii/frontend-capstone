module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(jsx?|js?)$',
  moduleDirectories: ['node_modules', 'src']
};