'use strict';

describe('Controller: ProcessmanageCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var ProcessmanageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProcessmanageCtrl = $controller('ProcessmanageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
