'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:FramedetailCtrl
 * @description
 * # FramedetailCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('FramedetailCtrl', function ($rootScope, $scope, $routeParams, $location, FBURL, $firebaseObject) {
    var frameRef = new Firebase(FBURL).child('frames').child($routeParams.id);
    $scope.frameObj = $firebaseObject(frameRef);
    $scope.deleteFrame = function(){
      $scope.frameObj.$remove().then(function(ref) {
        alert('성공적으로 삭제 되었습니다.');
        $location.path('frames');
      }, function(error) {
        console.log("[에러]::", error);
      });
    }
    $scope.updateFrame = function(){
      $scope.frameObj.$save().then(function(ref) {
        alert("성공적으로 업데이트 되었습니다.");
        $location.path("/frames");
      }, function(error) {
        alert("[에러]:", error);
      });
    }
  });