'use strict';

/**
 * @ngdoc filter
 * @name initApp.filter:isIndividualText
 * @function
 * @description
 * # isIndividualText
 * Filter in the initApp.
 */
angular.module('initApp')
  .filter('isIndividualText', function () {
    return function (input) {
      if(input==="true")
        return '개인';
      else
        return "거래처"
    };
  });

