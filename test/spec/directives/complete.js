'use strict';

describe('Directive: complete', function () {

  // load the directive's module
  beforeEach(module('communiTaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<complete></complete>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the complete directive');
  }));
});
