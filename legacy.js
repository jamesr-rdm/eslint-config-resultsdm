module.exports = {
  extends: [
    'eslint-config-resultsdm/rules/best-practices',
    'eslint-config-resultsdm/rules/errors',
    'eslint-config-resultsdm/rules/legacy',
    'eslint-config-resultsdm/rules/node',
    'eslint-config-resultsdm/rules/style',
    'eslint-config-resultsdm/rules/variables',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  ecmaFeatures: {},
  globals: {},
  rules: {},
};
