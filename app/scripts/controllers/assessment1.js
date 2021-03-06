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

  	$('.right-btn button:eq(1)').html('SUBMIT');
  	
  	window.scope = $scope;

  	
  	console.log('assessment controller fired');

  	var count = 0;
  	var forms = ['form1','form2','form3'];
  	var allCorrect = false;


  	// function to end assessment
  	var endAssessment = function(projCase){
  			var currentStage = $rootScope.stage;
			$rootScope.completed[projCase]['stage'+currentStage] = true;
			$rootScope.stage++;
			$state.go(projCase +'.video');
			$('.right-menu,.bottom-menu').removeClass('active');	
  	};

  	// reset form and clear selections
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

      		case 4:
  			$scope.assessment_form4.$setPristine();
      		$scope.assessment_form4.$setUntouched();
      		break;
  		}

  	};

  	// set form to submitted and if all are correct end assessment
  	var submit = function(){
  		switch($scope.stage){

			case 1 :
				$scope.assessment_form1.$setSubmitted();

				if($('.form1 .correct.active:not(.missed)').length === 6 && $('.form1 .incorrect.active').length === 0 ){
					allCorrect = true;
				}
			break;

			case 2 :
				$scope.assessment_form2.$setSubmitted();

				if($('.form2 .correct.active:not(.missed)').length === 1 && $('.form2 .incorrect.active').length === 0){
					allCorrect = true;
				}
			break;

			case 3 :
				$scope.assessment_form3.$setSubmitted();

				if($('.form3 .correct.active:not(.missed)').length === 1 && $('.form3 .incorrect.active').length === 0){
					allCorrect = true;
					$('.correct:not(.active)').addClass('active missed');
					$('form .warning').addClass('active');
				}
			break;

			case 4 :
				$scope.assessment_form4.$setSubmitted();

				$scope.showDecision = true;

				$('.form4 .correct.active').addClass('selected')

				if($('.form4 .correct.selected').length === 2){
					allCorrect = true;
				}
			break;

		}
  	};

  	// text to show how many questions you got right
  	var correctAnswers = function(){

  		switch($scope.stage){

			case 1 :
				if (count === 3) {
					$('.end-result').html('You have selected <b>'+$('.form1 .correct.active:not(.missed)').length+' step/s</b> correctly<br> The steps you missed are coloured orange and any incorrect steps are coloured red');
				} else if ($('.form1 .incorrect.active').length > 0 ){
					$('.end-result').html('You have selected <b>'+$('.form1 .correct.active:not(.missed)').length+' step/s</b> correctly<br> But also '+$('.form1 .incorrect.active').length+' step/s incorrectly');
				} else{
					$('.end-result').html('You have selected <b>'+$('.form1 .correct.active:not(.missed)').length+' step/s</b> correctly<br> There are still one or more further steps to find');
				}
				
			break;

			case 2 :
				$('.end-result').html('Incorrect - Try again');
			break;

			case 3 :
				$('.end-result').html('There is still an answer to find');
			break;

		}

  	};

  	var allCorrectCheck = function(){

  		if (allCorrect) {
  			if ($scope.stage !== 4) {
  				if ($scope.stage === 1) {
  					$('.end-result').html('You selected all of the correct steps – Well done');
  				} else{
  					$('.end-result').html('You have selected the correct option. Please click on the NEXT STEP to continue');
  				};

  				
  			}
			
			$('.right-btn button:eq(1)').html('NEXT STEP');

		} else {
			correctAnswers();
		}

  	};

  	$rootScope.submitForm = function(projCase){

  		if (allCorrect) {
  			endAssessment(projCase);
  		};

  		// how many times you have submitted the form
		count++;

		if ($scope.stage !==4) {

			switch(count){
				case 1 :
				// on first submit of answers highlights wrong answers or proceeds to next section of case
				submit();
				$('.right-btn button:eq(1)').html('TRY AGAIN');
				$("form[novalidate] input").prop('disabled', true);
				allCorrectCheck();
				break;

				case 2 :
				resetForm();
				$('.right-btn button:eq(1)').html('SUBMIT');
				$("form[novalidate] input").prop('disabled', false);
				break;

				case 3 :
				submit();
				// highlights wrong answers and selects correct ones
				$('form .correct,form .warning').addClass('active');
				$("form[novalidate] input").prop('disabled', true);
				$('.correct .ng-pristine').parent().parent().addClass('missed');
				$('.right-btn button:eq(1)').html('NEXT STEP')
				allCorrectCheck();
				
				break;

				case 4 :
				endAssessment(projCase);
				// $rootScope.stage++;
				// $state.go(projCase +'.video');
				// $('.right-menu,.bottom-menu').removeClass('active');
				break;
			}

		} else {


			if ($scope.assessment_form4.$submitted) {
				resetForm();
				$("form[novalidate] input").prop('disabled', false);
				$scope.showDecision = false;
				$('.right-btn button:eq(1)').html('SUBMIT');
			} else {

				submit();

				$('.right-btn button:eq(1)').html('TRY AGAIN');
				$("form[novalidate] input").prop('disabled', true);
				allCorrectCheck();


			}

			
			

			// $rootScope.stage++;
			// $state.go('case1.video');
			// $('.right-menu,.bottom-menu').removeClass('active');
		}

		
    };

  });
