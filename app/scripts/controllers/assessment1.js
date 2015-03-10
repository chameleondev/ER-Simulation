'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:assessment1Ctrl
 * @description
 * # assessment1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('assessment1Ctrl', function ($scope,$timeout,$rootScope,$state) {

  	var count = 0;

  	$rootScope.submitForm = function(){
		count++;

		switch(count){
			case 1 :
			// highlights wrong answers
			$scope.assessment_form.$setSubmitted();
			break;

			case 2 :
			// highlights wrong answers and selects correct ones
			$('form .correct').addClass('active');
			$("input").prop('disabled', true);
			break;

			case 3 :
			$state.go('case1.video');
			$scope.$parent.showMenu();
			break;
		}



    };

  });
