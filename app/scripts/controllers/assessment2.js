'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:assessment1Ctrl
 * @description
 * # assessment1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('assessment2Ctrl', function ($scope,$timeout,$rootScope,$state) {

  	$('.right-btn button:eq(1)').html('SUBMIT');

  	window.scope = $scope;

  	$scope.form = {};

  	

  	$scope.selectedAnswers = function(){
		  	var answersArr = [
		  		$scope.form.thrombophilia,
		  		$scope.form.ultrasound,
		  		$scope.form.computerized,
		  		$scope.form.ventilation,
		  		$scope.form.anticoagulant,
		  		$scope.form.assess,
		  		$scope.form.noTests
		  	];
  			var numOfTrue = 0;
			for(var i=0;i<answersArr.length;i++){
			    if(answersArr[i] === true)
			       numOfTrue++;
			}
			return numOfTrue;
  	};

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
      		$scope.form = {};
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

				if($('.form1 .correct.active:not(.missed)').length === 10 && $('.form1 .incorrect.active').length === 0 ){
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

				if($('.form3 .correct.active:not(.missed)').length === 2 && $('.form3 .incorrect.active').length === 0){
					allCorrect = true;
				}
			break;

			case 4 :
				$scope.assessment_form4.$setSubmitted();

				$scope.showDecision = true;

				$('.form4 .correct.active').addClass('selected')

				if($('.form4 .correct.selected').length === 3){
					allCorrect = true;
					console.log(allCorrect);
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
				} else if($('.form1 .incorrect.active').length > 0 ){
					$('.end-result').html('You have selected <b>'+$('.form1 .correct.active:not(.missed)').length+' step/s</b> correctly<br> But also '+$('.form1 .incorrect.active').length+' step/s incorrectly');
				} else {
					$('.end-result').html('You have selected <b>'+$('.form1 .correct.active:not(.missed)').length+' step/s</b> correctly<br> There are still one or more further steps to find');
				}
				
			break;

			case 2 :
				$('.end-result').html('Incorrect - Try again');
			break;

			case 3 :
				if($('.form3 .correct.active:not(.missed)').length === 1){
					if (count === 3) {
						$('.end-result').html('You have selected one correct answer');
					} else {
						$('.end-result').html('Correct, one more answer to find - Try again');
					}
				} else {
					$('.end-result').html('Incorrect - Try again');
				}
				
			break;

		}

  	};

  	var allCorrectCheck = function(){

  		if (allCorrect) {
  			if ($scope.stage !== 4) {
  				switch($scope.stage ){

  					case 1:
  					$('.end-result').html('You selected all of the correct steps – Well done');
  					break;

  					case 2:
  					$('.end-result').html('You have selected the correct option. Please click on the NEXT STEP to continue');
  					break;

  					case 3:
  					$('.end-result').html('You have selected the correct options. Please click on the NEXT STEP to continue');
  					console.log('all correct');
  					break;

  					default:
  					$('.end-result').html('You have selected the correct option. Please click on the NEXT STEP to continue');
  					break;

  				}
  				
  			}
			
			$('.right-btn button:eq(1)').html('NEXT STEP');

		} else {
			correctAnswers();
		}

  	};

  	$rootScope.submitForm = function(projCase){

  		if (allCorrect) {
  			
			if($scope.stage === 3){
				if($scope.popupShown){
					endAssessment(projCase);
				} else {
					$scope.showBlocker = true;
					$scope.popupShown = true;
				}
			} else {
				endAssessment(projCase);
			}
			
  			
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
				$('form .correct').addClass('active');
				$("form[novalidate] input").prop('disabled', true);
				$('.correct .ng-pristine').parent().parent().addClass('missed');
				$('.right-btn button:eq(1)').html('NEXT STEP')
				allCorrectCheck();
				
				break;

				case 4 :
				if ($rootScope.stage === 3) {

					if ($scope.popupShown) {
						endAssessment(projCase);
					}else{
						$scope.showBlocker = true;
						$scope.popupShown = true;
						count--;
					}

				} else {
					endAssessment(projCase);
				}
				
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

    $scope.clicker = function(){
  		$scope.showBlocker = true;
  	};

  });
