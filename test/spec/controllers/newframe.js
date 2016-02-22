'use strict';

describe('Controller: NewframeCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var NewframeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewframeCtrl = $controller('NewframeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
