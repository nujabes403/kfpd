'use strict';

/**
 * @ngdoc filter
 * @name initApp.filter:frameType
 * @function
 * @description
 * # frameType
 * Filter in the initApp.
 */
angular.module('initApp')
  .filter('frameType', function () {
    return function (input) {
      if(input==="1")
        return '일반';
      else if(input==="2")
        return "스텐"
      else if(input==="3")
        return "매립"
      else if(input==="4")
        return "구로"
      else if(input==="5")
        return "아연"
    };
  });

