// module.exports = {
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
//     transform: {
//       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//     },
//     moduleNameMapper: {
//       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     },
    
//   };

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
};
