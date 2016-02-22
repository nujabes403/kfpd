'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('DialogCtrl', function ($scope, $mdDialog, FBURL, $firebaseObject, FrameService) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.optionForm = {name:'', price:0, published: true};
    $scope.isDup = false;
    var optionRef = new Firebase(FBURL).child('frameOptions')
    $scope.checkDuplicate = function(){
      console.log('check');
      if($scope.optionForm.name.length !== 0){
        var result = $firebaseObject(optionRef.child($scope.optionForm.name));
        result.$loaded().then(function(data){
          console.log(data)
          if(data.name==null){
            $scope.isDup = false;
          }
          else{
            $scope.isDup = true;
          }
        })
      }
    }
    $scope.createOptions = function(){
      FrameService.createOptions($scope.optionForm)
    }
  });
