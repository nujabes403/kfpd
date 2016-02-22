'use strict';

describe('Controller: IncomeexpenseCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var IncomeexpenseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncomeexpenseCtrl = $controller('IncomeexpenseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
