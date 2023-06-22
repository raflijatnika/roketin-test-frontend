module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'html'],
  collectCoverageFrom: ['src/**/*.(js|vue)'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'src/plugins/', 'src/main.js', '.router.js', 'index.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
};
