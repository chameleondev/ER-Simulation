'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:Case1Ctrl
 * @description
 * # Case1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('Case1Ctrl', function ($scope,$timeout,$rootScope,$state) {

  	window.scope = $scope;

	$scope.showMenu = function(){
		$timeout(function(){
			$('.right-menu,.bottom-menu,.video-frame').addClass('active');
		},200)
		
	};

  });
