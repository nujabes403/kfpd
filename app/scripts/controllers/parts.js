'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:PartsCtrl
 * @description
 * # PartsCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('PartsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
