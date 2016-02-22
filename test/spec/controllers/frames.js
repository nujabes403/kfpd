'use strict';

describe('Controller: FramesCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var FramesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FramesCtrl = $controller('FramesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
