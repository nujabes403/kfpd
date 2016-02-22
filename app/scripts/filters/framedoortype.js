'use strict';

/**
 * @ngdoc filter
 * @name initApp.filter:frameDoorType
 * @function
 * @description
 * # frameDoorType
 * Filter in the initApp.
 */
angular.module('initApp')
  .filter('frameDoorType', function () {
    return function (input) {
      if(input==="true")
        return '편개';
      else
        return "양개"
    };
  });

