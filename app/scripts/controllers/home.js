'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('HomeCtrl', function ($scope,$timeout) {

	$(document).bind('touchmove', false);

    $scope.message = 'Hello World';
  });
