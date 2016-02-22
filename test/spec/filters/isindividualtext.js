'use strict';

describe('Filter: isIndividualText', function () {

  // load the filter's module
  beforeEach(module('initApp'));

  // initialize a new instance of the filter before each test
  var isIndividualText;
  beforeEach(inject(function ($filter) {
    isIndividualText = $filter('isIndividualText');
  }));

  it('should return the input prefixed with "isIndividualText filter:"', function () {
    var text = 'angularjs';
    expect(isIndividualText(text)).toBe('isIndividualText filter: ' + text);
  });

});
