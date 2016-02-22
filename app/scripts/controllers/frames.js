'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:FramesCtrl
 * @description
 * # FramesCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('FramesCtrl', function ($scope, $location, FrameService) {
    $scope.frames = FrameService.listFrame();
    $scope.goToDetail = function(id){
      $location.path('frameDetail/'+id);
    }
  });
