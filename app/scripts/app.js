'use strict';

/**
 * @ngdoc overview
 * @name ersimulationToolApp
 * @description
 * # ersimulationToolApp
 *
 * Main module of the application.
 */
angular
  .module('ersimulationToolApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ngSanitize',
	'com.2fdevs.videogular',
	'com.2fdevs.videogular.plugins.controls',
	// 'com.2fdevs.videogular.plugins.overlayplay',
	'com.2fdevs.videogular.plugins.poster'
  ]);


angular.module('ersimulationToolApp')
	.config(function($stateProvider, $urlRouterProvider){

		// For any unmatched url, redirect to /state1
  		$urlRouterProvider.otherwise('/');

  		$stateProvider

	    .state('home', {
	      url: '/',
	      templateUrl: 'views/home/index.html',
	      controller : function($rootScope){
	      	$rootScope.stage = 1;
	      }
	    })

	    .state('case1', {
	      url: '/',
	      templateUrl: 'views/case1/index.html',
	      controller : 'Case1Ctrl'
	    })

	    // video section

	    .state('case1.video', {
	      templateUrl: 'views/case1/video/video.html'
	    })

	    .state('case1.video.info', {
	      templateUrl: 'views/case1/information.html'
	    })

	    .state('case1.video.hint', {
	      templateUrl: 'views/case1/hint.html'
	    })

	    .state('case1.video.expert', {
	      templateUrl: 'views/case1/expert.html'
	    })


	    // assessment section

	    .state('case1.assessment', {
	      templateUrl: 'views/case1/assessment/assessment.html',
	      controller : 'assessment1Ctrl'
	    })

	    .state('case1.assessment.info', {
	      templateUrl: 'views/case1/information.html'
	    })

	    .state('case1.assessment.hint', {
	      templateUrl: 'views/case1/hint.html'
	    })

	    .state('case1.assessment.expert', {
	      templateUrl: 'views/case1/expert.html'
	    });

	//function for adding a child information state to a state
	function addInformationState (stateName) {
	  $stateProvider
	  .state('case1.video.info.'+stateName, {
	    templateUrl: 'views/case1/info/'+stateName+'.html'
	  })

	  .state('case1.assessment.info.'+stateName, {
	    templateUrl: 'views/case1/info/'+stateName+'.html'
	  });
	}

	[
	'swollenLegs',
	'trauma',
	'cellulitis',
	'vte',
	'others',
	'investigations',
	'physicalExam',
	'wells',
	'dimerTest',
	'thrombophilia',
	'xray',
	'ultrasound',
	'anticoagulationTherapy',
	'venogram',
	'ctpa',
	'ventilation',
	'parenteralA',
	'parenteralB',
	'rivaroxaban'
	].forEach(addInformationState);

	});

angular.module('ersimulationToolApp')
	.run( ['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {
	    
		FastClick.attach(document.body);
	    
		$rootScope.$state = $state;
   		$rootScope.$stateParams = $stateParams;
   		$rootScope.stage = 1;

	    // $(document).bind('touchmove', false);

		$rootScope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){ 
		   console.log(toState.name);

		   

		   if ($state.includes('*.*.info.**')) {
		   		$('.middle-section .button-bg').css({
		   			left : '0',
		   			opacity :'1'
		   		});
		   }
		   else if ($state.includes('*.*.hint')) {
		   		$('.middle-section .button-bg').css({
		   			left : '100px',
		   			opacity :'1'
		   		});
		   } 
		   else if ($state.includes('*.*.expert')) {
		   		$('.middle-section .button-bg').css({
		   			left : '200px',
		   			opacity :'1'
		   		});
		   }
		   else if($state.includes('*.assessment')){
		   		$('.bottom-menu').addClass('active');
		   }
		   else{
		   	$('.middle-section .button-bg').css("opacity","0");
		   }

		})


	}
]);