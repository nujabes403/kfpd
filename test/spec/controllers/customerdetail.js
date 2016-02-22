'use strict';

describe('Controller: CustomerdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var CustomerdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerdetailCtrl = $controller('CustomerdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
