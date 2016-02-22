'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:NewframeCtrl
 * @description
 * # NewframeCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('NewframeCtrl', function ($scope, $rootScope, $location, FBURL,$firebaseArray,
                                        $mdDialog, $mdMedia) {

    var options = new Firebase(FBURL).child('frameOptions');
    var targetOptions = options.orderByChild('published').equalTo(true);
    $scope.frameOptions = $firebaseArray(targetOptions);
    $scope.customerForm={ op1:0, op2:0, op3:0, op4:0,op5:0,op6:0,op7:0,op8:0,op9:0,op10:0,op11:0,op12:0,op13:0,op14:0,op15:0,op16:0};


    $scope.showAdvanced = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
          controller: DialogController,
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
          controller: OptionListDialogController,
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

      //var customersRef = new Firebase(FBURL).child('customers').orderByChild('name').equalTo($scope.customerForm.name).once('value', function(snap) {
      //  // the keys are the user ids, the values are objects containing each user record that matched (presumably 1?)
      //  console.log( snap.val());
      //  if(snap.val()!== null){
      //    alert("중복되는 데이터 입니다");
      //  }
      //  else{
      //    CustomerService.addNewCustomer($scope.customerForm);
      //  }
      //});

      //CustomerService.addNewCustomer($scope.customerForm);
      var frimeRef = new Firebase(FBURL).child('frames');
      var onComplete = function(error) {
        if (error) {
          alert('[에러]:'+error);
        } else {
          alert('성공적으로 저장되었습니다.');
          $rootScope.$apply(function() {
            $location.path("/frames");})
        }
      };
      var newCustomer = frimeRef.push();
      newCustomer.set($scope.customerForm, onComplete);

    }

  });
function OptionListDialogController($scope, $mdDialog, FBURL, $firebaseArray, FrameService) {
  var optionRef = new Firebase(FBURL).child('frameOptions');
  $scope.options = $firebaseArray(optionRef);
  $scope.updatePubStatus = function(index){
    $scope.options.$save(index);
  }
  $scope.answer = function(answer) {
    $scope.options.$save()
    $mdDialog.hide(answer);
  };
}
function DialogController($scope, $mdDialog, FBURL, $firebaseObject, FrameService) {
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
}
