'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:FramedetailCtrl
 * @description
 * # FramedetailCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('FramedetailCtrl', function ($rootScope, $scope, $routeParams, $location,
                                           FBURL, $firebaseObject,
                                           $mdDialog, $mdMedia) {
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

    $scope.showAdvanced = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'DialogCtrl',
          templateUrl: 'views/tmp/dialog1.tmp.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
    $scope.showOptions = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
          controller: 'OptionListDialogCtrl',
          templateUrl: 'views/tmp/frameOptionList.tmp.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: useFullScreen
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    $scope.deleteOption = function(){
      alert("deleted");
    }
  });