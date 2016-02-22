'use strict';

describe('Controller: YoCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var YoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YoCtrl = $controller('YoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
