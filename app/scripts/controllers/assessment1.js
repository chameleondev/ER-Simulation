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
  	var forms = ['form1','form2','form3'];

  	// function to end assessment
  	var endAssessment = function(){
  		$rootScope.stage++;
		$state.go('case1.video');
		$('.right-menu,.bottom-menu').removeClass('active');
  	};

  	var resetForm = function(){

  		$('form .answer-row').removeClass('active');

  		switch($scope.stage){
  			case 1:
  			$scope.assessment_form1.$setPristine();
      		$scope.assessment_form1.$setUntouched();
      		break;

      		case 2:
  			$scope.assessment_form2.$setPristine();
      		$scope.assessment_form2.$setUntouched();
      		break;

      		case 3:
  			$scope.assessment_form3.$setPristine();
      		$scope.assessment_form3.$setUntouched();
      		break;
  		}

  	};

  	var submit = function(){
  		switch($scope.stage){

			case 1 :
				$scope.assessment_form1.$setSubmitted();

				if($('.form1 .correct.active').length === 7 && $('.form1 .incorrect.active').length === 0 ){
					endAssessment();
				}
			break;

			case 2 :
				$scope.assessment_form2.$setSubmitted();

				if($('.form2 .correct.active').length === 1 && $('.form2 .incorrect.active').length === 0){
					endAssessment();
				}
			break;

			case 3 :
				$scope.assessment_form3.$setSubmitted();

				if($('.form3 .correct.active').length === 1 && $('.form3 .incorrect.active').length === 0){
					endAssessment();
				}
			break;

		}
  	};


  	var correctAnswers = function(){

  		switch($scope.stage){

			case 1 :
				$('.end-result').html('You have selected '+$('.form1 .correct.active:not(.missed)').length+' steps correctly – There are still one or more further steps to find');
			break;

			case 2 :
				$('.end-result').html('Incorrect - Try again');
			break;

			case 3 :
				$('.end-result').html('Incorrect - Try again');
			break;

		}

  	};

  	$rootScope.submitForm = function(){
		count++;

		if ($scope.stage !==4) {

			switch(count){
				case 1 :
				// on first submit of answers highlights wrong answers or proceeds to next section of case
				submit();
				$('.right-btn button:eq(1)').html('TRY AGAIN');
				$("input").prop('disabled', true);
				correctAnswers();
				break;

				case 2 :
				resetForm();
				$('.right-btn button:eq(1)').html('SUBMIT');
				$("input").prop('disabled', false);
				break;

				case 3 :
				submit();
				// highlights wrong answers and selects correct ones
				$('form .correct').addClass('active');
				console.log($('.correct.active').length);
				$("input").prop('disabled', true);

				$('.correct .ng-pristine').parent().parent().addClass('missed');
				$('.right-btn button:eq(1)').html('NEXT STEP')
				correctAnswers();
				
				break;

				case 4 :
				$rootScope.stage++;
				$state.go('case1.video');
				$('.right-menu,.bottom-menu').removeClass('active');
				break;
			}

		} else {
			$rootScope.stage++;
			$state.go('case1.video');
			$('.right-menu,.bottom-menu').removeClass('active');
		}

		



    };

  });
