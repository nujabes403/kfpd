'use strict';

describe('Filter: frameType', function () {

  // load the filter's module
  beforeEach(module('initApp'));

  // initialize a new instance of the filter before each test
  var frameType;
  beforeEach(inject(function ($filter) {
    frameType = $filter('frameType');
  }));

  it('should return the input prefixed with "frameType filter:"', function () {
    var text = 'angularjs';
    expect(frameType(text)).toBe('frameType filter: ' + text);
  });

});
