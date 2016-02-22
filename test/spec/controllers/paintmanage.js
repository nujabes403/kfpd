'use strict';

describe('Controller: PaintmanageCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var PaintmanageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaintmanageCtrl = $controller('PaintmanageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
