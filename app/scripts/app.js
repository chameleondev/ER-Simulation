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
	      templateUrl: 'views/home/index.html'
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

	// //function for adding a child shoopingCart state to a state
	// function addShoppingCartState (stateName) {
	//   $stateProvider.state(stateName + '.shoppingCart', {
	//     url: '/shoppingCart',
	//     templateUrl: 'views/shopping-cart.html',
	//     data: {
	//       parentStateName: stateName // for use in the controller
	//     },
	//     controller: 'MyShoppingCartController'
	//   });
	// }
	// // Add a child shoppingCart state to all the states you want.
	// ['random','browse','browse.product','browse.search'].forEach(addShoppingCartState);

	});

angular.module('ersimulationToolApp')
	.run( ['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {
	    
	    $(document).bind('touchmove', false);

		$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
		   console.log(toState.name);


		   switch(toState.name){

		   		case 'case1.video.info' :
		   		case 'case1.assessment.info' :
		   		$('.middle-section .button-bg').css({
		   			left : '0',
		   			opacity :'1'
		   		});
		   		break;

		   		case 'case1.video.hint' :
		   		case 'case1.assessment.hint' :
		   		$('.middle-section .button-bg').css({
		   			left : '120px',
		   			opacity :'1'
		   		});
		   		break;

		   		case 'case1.video.expert' :
		   		case 'case1.assessment.expert' :
		   		$('.middle-section .button-bg').css({
		   			left : '230px',
		   			opacity :'1'
		   		});
		   		break;

		   		default:
		   		$('.middle-section .button-bg').css("opacity","0");

		   }
		})


	}
]);