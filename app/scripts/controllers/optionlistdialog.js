'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:OptionlistdialogCtrl
 * @description
 * # OptionlistdialogCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('OptionListDialogCtrl', function ($scope, $mdDialog, FBURL, $firebaseArray, FrameService) {
    var optionRef = new Firebase(FBURL).child('frameOptions');
    $scope.options = $firebaseArray(optionRef);
    $scope.updatePubStatus = function(index){
      $scope.options.$save(index);
    }
    $scope.answer = function(answer) {
      $scope.options.$save()
      $mdDialog.hide(answer);
    };
  });