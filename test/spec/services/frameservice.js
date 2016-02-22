'use strict';

describe('Service: frameService', function () {

  // load the service's module
  beforeEach(module('initApp'));

  // instantiate service
  var frameService;
  beforeEach(inject(function (_frameService_) {
    frameService = _frameService_;
  }));

  it('should do something', function () {
    expect(!!frameService).toBe(true);
  });

});
