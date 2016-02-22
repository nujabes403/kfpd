'use strict';

describe('Filter: frameDoorType', function () {

  // load the filter's module
  beforeEach(module('initApp'));

  // initialize a new instance of the filter before each test
  var frameDoorType;
  beforeEach(inject(function ($filter) {
    frameDoorType = $filter('frameDoorType');
  }));

  it('should return the input prefixed with "frameDoorType filter:"', function () {
    var text = 'angularjs';
    expect(frameDoorType(text)).toBe('frameDoorType filter: ' + text);
  });

});
