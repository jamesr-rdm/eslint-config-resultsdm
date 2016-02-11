# eslint-config-resultsdm

[![npm version](https://badge.fury.io/js/eslint-config-resultsdm.svg)](http://badge.fury.io/js/eslint-config-resultsdm)

This package provides Results Driven Marketing's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-resultsdm

Lints ES6+ but does not lint React or Angular. Requires `eslint`.

1. `npm install --save-dev eslint-config-resultsdm eslint`
2. add `"extends": "resultsdm"` to your .eslintrc

### eslint-config-resultsdm/react

Contains all of our ESLint rules, including EcmaScript 6+
and React. Requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-resultsdm eslint-plugin-react eslint`
2. add `"extends": "resultsdm/react"` to your .eslintrc

### eslint-config-resultsdm/angular

Contains all of our ESLint rules, including EcmaScript 6+
and React. Requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev eslint-config-resultsdm eslint-plugin-angular eslint`
2. add `"extends": "resultsdm/angular"` to your .eslintrc

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-resultsdm eslint`
2. add `"extends": "resultsdm/legacy"` to your .eslintrc

See [Results Driven Marketing's Javascript Styleguide](https://github.com/resultsdm/javascript-styleguide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes.

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.