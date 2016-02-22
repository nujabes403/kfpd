'use strict';

/**
 * @ngdoc function
 * @name initApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the initApp
 */
angular.module('initApp')
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $location) {

    $scope.goto = function(path){
      $mdSidenav('left').close();
      $location.path(path)
    }

    $scope.menus = [
      {name:'판매관리', href:'sales'},
      {name:'외상대출금관리', href:'billManage'},
      {name:'매입관리', href:'purchase'},
      {name:'외상매입금조회', href:'beforeBillSearch'},
      {name:'수입지출관리', href:'IncomeExpense'},
      {name:'부가세조회', href:'tax'},
      {name:'거래처관리', href:'customer'},
      {name:'제품관리', href:'product'},
      {name:'과거자료조회', href:'history'},
      {name:'공장확인요청목록', href:'confirmManufacture'},
      {name:'제작관리', href:'processManage'},
      {name:'분체도장관리', href:'paintManage'},

    ];

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };

    $scope.toggleLeft = buildDelayedToggler('left');
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }

  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {



    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });