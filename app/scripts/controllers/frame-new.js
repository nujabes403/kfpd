'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:frame-newCtrl
 * @description
 * # frame-newCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('NewframeCtrl', function ($scope, $rootScope, $location, FBURL,$firebaseArray,
                                        $mdDialog, $mdMedia,
                                        FrameService) {

    var options = new Firebase(FBURL).child('frameOptions');
    var targetOptions = options.orderByChild('published').equalTo(true);

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

    $scope.createFrame = function(){
      $scope.customerForm.options = [];
      //resolve additional option information
      $scope.frameOptions.forEach(function(val){
        if(val.price > 0){
          var option = {name: val.name, price:val.price}
          $scope.customerForm.options.push(option)
        }
      })

      var promise = FrameService.addNewFrame($scope.customerForm);
      promise.then(function(result){
        alert('Success: '+ result);
        $location.path("/frames");
      },function(error){
        alert('Error: '+ result);
      },function(update){
        console.log(update);
      })
    }

    var getOptions = function(){
      FrameService.listOptions().then(function(result){
        $scope.frameOptions = result;
      },function(error){
        alert('Error: '+ result);
      },function(update){
        console.log(update);
      });
    }

    getOptions();
  });
