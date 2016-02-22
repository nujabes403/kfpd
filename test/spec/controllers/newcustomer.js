'use strict';

describe('Controller: NewcustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var NewcustomerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewcustomerCtrl = $controller('NewcustomerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
