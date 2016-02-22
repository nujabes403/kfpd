'use strict';

describe('Controller: FramedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('initApp'));

  var FramedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FramedetailCtrl = $controller('FramedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
