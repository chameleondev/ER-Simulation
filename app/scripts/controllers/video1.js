'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:Video1Ctrl
 * @description
 * # Video1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('Video1Ctrl', function ($scope,$state,$rootScope) {

    $rootScope.state = $state.current.name;

  });
