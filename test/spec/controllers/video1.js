'use strict';

describe('Controller: Video1Ctrl', function () {

  // load the controller's module
  beforeEach(module('ersimulationToolApp'));

  var Video1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Video1Ctrl = $controller('Video1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
