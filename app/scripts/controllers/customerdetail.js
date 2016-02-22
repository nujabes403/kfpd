'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:CustomerdetailCtrl
 * @description
 * # CustomerdetailCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('CustomerdetailCtrl', function ($rootScope, $scope, $routeParams, $location, FBURL, $firebaseObject) {
    var cstRef = new Firebase(FBURL).child('customers').child($routeParams.id);
    $scope.cstObj = $firebaseObject(cstRef);
    $scope.deleteCustomer = function(){
      $scope.cstObj.$remove().then(function(ref) {
        alert('성공적으로 삭제 되었습니다.');
        $location.path('customer');
      }, function(error) {
        console.log("[에러]::", error);
      });
    }
    $scope.updateCustomer = function(){
      $scope.cstObj.$save().then(function(ref) {
        alert("성공적으로 업데이트 되었습니다.");
        $location.path("/customer");
      }, function(error) {
        alert("[에러]:", error);
      });
    }
  });