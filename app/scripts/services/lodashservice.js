'use strict';

/**
 * @ngdoc service
 * @name initApp.lodashService
 * @description
 * # lodashService
 * Factory in the initApp.
 */
angular.module('initApp')
  .factory('lodashService', function () {
    // Service logic
    // ...

    // Public API here
    return {
      extract: function (arr) {
        return _.filter(arr, function(obj){ return obj['published']});
      }
    };
  });
