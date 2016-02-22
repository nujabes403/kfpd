'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('CustomerCtrl', function ($scope, $location, CustomerService) {
    $scope.customers = CustomerService.listCustomer();
    $scope.goToDetail = function(id){
      $location.path('customerDetail/'+id);
    }
  });
