'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:YoCtrl
 * @description
 * # YoCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('YoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
