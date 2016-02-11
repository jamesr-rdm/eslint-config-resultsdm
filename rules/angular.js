module.exports = {
  plugins: [
    'angular',
  ],
  globals: {
    angular: true,
  },
  // View link below for Angular rules documentation
  // https://github.com/Gillespie59/eslint-plugin-angular#rules
  rules: {
    // Basic configuration in order to be compatible with the guideline provided by @johnpapa
    'no-use-before-define': 0,
    // Use angular.element instead of $ or jQuery
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/angularelement.md
    'angular/angularelement': 1,
    // Limit the number of angular components per file
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/component-limit.md
    'angular/component-limit': [0, 1],
    // Disallow assignments to $scope in controllers
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as.md
    'angular/controller-as': 2,
    // Require the use of controllerAs in routes or states
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-route.md
    'angular/controller-as-route': 2,
    // Require and specify a capture variable for this in controllers
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-vm.md
    'angular/controller-as-vm': [2, 'vm'],
    // Require and specify a prefix for all controller names
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-name.md
    'angular/controller-name': [2, '/[A-Z].*Controller$/'],
    // Use $q(function(resolve, reject){}) instead of $q.deferred
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/deferred.md
    'angular/deferred': 0,
    // Use angular.isDefined and angular.isUndefined instead of other undefined checks
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/definedundefined.md
    'angular/definedundefined': 2,
    // Require a consistent DI syntax
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di.md
    'angular/di': [2, 'function'],
    // Require DI parameters to be sorted alphabetically
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di-order.md
    'angular/di-order': [0, true],
    // Require and specify a prefix for all directive names
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-name.md
    'angular/directive-name': 0,
    // Disallow any other directive restrict than 'A' or 'E'
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-restrict.md
    'angular/directive-restrict': [0, { restrict: 'AE', explicit: 'never' }],
    // Use $document instead of document
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/document-service.md
    'angular/document-service': 2,
    // Disallow empty controllers
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/empty-controller.md
    'angular/empty-controller': 0,
    // Require and specify a consistent component name pattern
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/file-name.md
    'angular/file-name': 0,
    // Require and specify a prefix for all filter names
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/filter-name.md
    'angular/filter-name': 0,
    // Use angular.forEach instead of native Array.prototype.forEach
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/foreach.md
    'angular/foreach': 0,
    // Require and specify a consistent function style for components ('named' or 'anonymous')
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/function-type.md
    'angular/function-type': 0,
    // Use $interval instead of setInterval
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/interval-service.md
    'angular/interval-service': 2,
    // Use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/json-functions.md
    'angular/json-functions': 2,
    // Use the $log service instead of the console methods
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/log.md
    'angular/log': 2,
    // Disallow to reference modules with variables and require to use the getter syntax instead
    // angular.module('myModule')
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-getter.md
    'angular/module-getter': 2,
    // Require and specify a prefix for all module names
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-name.md
    'angular/module-name': 0,
    // Disallow to assign modules to variables (linked to module-getter)
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-setter.md
    'angular/module-setter': 2,
    // Require to use angular.mock methods directly
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-angular-mock.md
    'angular/no-angular-mock': 0,
    // Disallow use of controllers (according to the component first pattern)
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-controller.md
    'angular/no-controller': 0,
    // Use $cookies instead of $cookieStore
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-cookiestore.md
    'angular/no-cookiestore': 2,
    // Use $apply() instead of $digest() (replaced by watchers-execution)
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-digest.md
    'angular/no-digest': 2,
    // Disallow the $http methods success() and error()
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-http-callback.md
    'angular/no-http-callback': 2,
    // Disallow the use of inline templates
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-inline-template.md
    'angular/no-inline-template': [0, { allowSimple: true }],
    // Disallow to wrap angular.element objects with jQuery or $
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-jquery-angularelement.md
    'angular/no-jquery-angularelement': 2,
    // Disallow use of internal angular properties prefixed with $$
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-private-call.md
    'angular/no-private-call': 2,
    // Keep run functions clean and simple
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-run-logic.md
    'angular/no-run-logic': [0, { allowParams: true }],
    // use factory() instead of service()
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-service-method.md
    'angular/no-service-method': 2,
    // Disallow DI of specified services for other angular components ($http for controllers,
    // filters and directives)
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-services.md
    'angular/no-services': [2, ['$http', '$resource', 'Restangular']],
    // Require $on and $watch deregistration callbacks to be saved in a variable
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/on-watch.md
    'angular/on-watch': 2,
    // Require all DI parameters to be located in their own line
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/one-dependency-per-line.md
    'angular/one-dependency-per-line': 0,
    // Disallow different rest service and specify one of '$http', '$resource', 'Restangular'
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/rest-service.md
    'angular/rest-service': 0,
    // Require and specify a prefix for all service names
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/service-name.md
    'angular/service-name': 2,
    // Use $timeout instead of setTimeout
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/timeout-service.md
    'angular/timeout-service': 2,
    // Use angular.isArray instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-array.md
    'angular/typecheck-array': 2,
    // Use angular.isDate instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-date.md
    'angular/typecheck-date': 2,
    // Use angular.isFunction instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-function.md
    'angular/typecheck-function': 2,
    // Use angular.isNumber instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-number.md
    'angular/typecheck-number': 2,
    // Use angular.isObject instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-object.md
    'angular/typecheck-object': 2,
    // Use angular.isRegexp instead of other comparisons (no native angular method)
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-regexp.md
    'angular/typecheck-regexp': 2,
    // Use angular.isString instead of typeof comparisons
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-string.md
    'angular/typecheck-string': 2,
    // Require and specify consistent use $scope.digest() or $scope.apply()
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/watchers-execution.md
    'angular/watchers-execution': [0, '$digest'],
    // Use $window instead of window
    // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/window-service.md
    'angular/window-service': 2,
  },
};
