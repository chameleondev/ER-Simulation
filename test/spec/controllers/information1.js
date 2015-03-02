'use strict';

describe('Controller: Information1Ctrl', function () {

  // load the controller's module
  beforeEach(module('ersimulationToolApp'));

  var Information1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Information1Ctrl = $controller('Information1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
