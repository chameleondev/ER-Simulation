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

	    // .state('home', {
	    //   url: '/',
	    //   templateUrl: 'views/home/index.html',
	    //   controller: 'HomeCtrl'
	    // })


		.state('home', {
	      url: '/',
	      templateUrl: 'views/home/index.html'
	    })

		.state('case1', {
	      url: '/',
	      templateUrl: 'views/case1/index.html'
	    })

	    .state('case1.video', {
	      templateUrl: 'views/case1/video.html',
	      controller: 'Video1Ctrl'
	    })

	    .state('case1.assessment', {
	      templateUrl: 'views/case1/assessment.html',
	      controller: 'Video1Ctrl'
	    })

	    .state('case1.info', {
	      templateUrl: 'views/case1/information.html',
	      controller: 'Video1Ctrl'
	    });

	});

angular.module('ersimulationToolApp').run( ['$rootScope', '$state', '$stateParams',
                      function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
}
]);