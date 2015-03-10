'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:Video1Ctrl
 * @description
 * # Video1Ctrl
 * Controller of the ersimulationToolApp
 */
// angular.module('ersimulationToolApp')
//   .controller('Video1Ctrl', function ($scope,$state,$rootScope) {

//     $rootScope.state = $state.current.name;

//     var count = 0;

//     $scope.$parent.submitForm = function(showMenu){
// 		console.log($scope.assessment_form);
// 		count++;

// 		switch(count){
// 			case 1 :
// 			console.log($state);
// 			// highlights wrong answers
// 			$scope.assessment_form.$setSubmitted();
// 			break;

// 			case 2 :
// 			// highlights wrong answers and selects correct ones
// 			$('form .correct').addClass('active');
// 			$("input").prop('disabled', true);
// 			break;

// 			case 3 :
// 			$state.go('^.video');
// 			showMenu();
// 			break;
// 		}



//     };

//   });
