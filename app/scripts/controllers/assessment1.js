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
			switch($scope.stage){

				case 1 :
				$scope.assessment_form1.$setSubmitted();
				break;

				case 2 :
				$scope.assessment_form2.$setSubmitted();
				break;

				case 3 :
				$scope.assessment_form3.$setSubmitted();
				break;

			}
			break;

			case 2 :
			// highlights wrong answers and selects correct ones
			$('form .correct').addClass('active');
			$("input").prop('disabled', true);
			break;

			case 3 :
			$rootScope.stage++;
			$state.go('case1.video');
			$('.right-menu,.bottom-menu').removeClass('active');
			$scope.$parent.progress = 0;
			// $scope.$parent.showMenu();
			// $timeout(function(){
			// 	$scope.replay();
			// },500);
			
			break;
		}



    };

  });
