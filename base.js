module.exports = {
  extends: [
    'eslint-config-resultsdm/legacy',
    'eslint-config-resultsdm/rules/es6',
  ].map(require.resolve),
  rules: {},
};
