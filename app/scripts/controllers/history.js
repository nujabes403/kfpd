'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('HistoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
