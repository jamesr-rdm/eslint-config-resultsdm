module.exports = {
  extends: [
    'eslint-config-resultsdm/base',
    'eslint-config-resultsdm/rules/strict',
    'eslint-config-resultsdm/rules/react',
  ].map(require.resolve),
  rules: {},
};
