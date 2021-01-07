const baseConfig = require('../../jest.config');
const name = __dirname.split('/').pop();

module.exports = {
  ...baseConfig,
  displayName: {
    name,
    color: 'magenta',
  },
  projects: ['.'],
  rootDir: '../..',
  testMatch: [
    `**/packages/react-magma-dom/**/?(*.)+(spec|test).{js,ts,mjs,tsx}`,
  ],
};
