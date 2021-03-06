'use strict';
/**
 * @ngdoc overview
 * @name ersimulationToolApp
 * @description
 * # ersimulationToolApp
 *
 * Main module of the application.
 */

 // console.log(process.pid);
// var gui = nw.require(nw.gui);
// gui.Window.get().showDevTools(); 

angular
  .module('ersimulationToolApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ngSanitize',
    'pdf'
	// 'com.2fdevs.videogular',
	// 'com.2fdevs.videogular.plugins.controls',
	// 'com.2fdevs.videogular.plugins.overlayplay',
	// 'com.2fdevs.videogular.plugins.poster'
  ]);

  angular.module('ersimulationToolApp').run(function($rootScope){
  		$rootScope.completed = {
      		case1 : {
      			stage1 : false,
      			stage2 : false,
      			stage3 : false,
      			stage4 : false,
      			stage5 : false,
      			stage6 : false
      		},
      		case2 : {
      			stage1 : false,
      			stage2 : false,
      			stage3 : false,
      			stage4 : false,
      			stage5 : false,
      			stage6 : false
      		}
      	}
  });


angular.module('ersimulationToolApp')
	.config(function($stateProvider, $urlRouterProvider){

		// For any unmatched url, redirect to /state1
  		$urlRouterProvider.otherwise('/');

  		$stateProvider

	    .state('home', {
	      url: '/',
	      templateUrl: 'views/home/index.html',
	      controller : function($rootScope,$scope,Nw){

	      	window.rootsc = $rootScope;
	      	$rootScope.stage = 1;

	      	$scope.fullscreen = Nw.toggleFullscreen;

	      	$scope.shutdown = Nw.shutdown;
	      }
	    })

	    .state('home.terms', {
	      templateUrl: 'views/home/terms.html'
	    })

	    .state('home.spc', {
	      templateUrl: 'views/home/spc.html'
	    })

	    .state('home.pi', {
	      templateUrl: 'views/home/pi.html'
	    })


	    .state('case1', {
	      url: '/',
	      templateUrl: 'views/case1/index.html',
	      controller : 'Case1Ctrl'
	    })

	    .state('case2', {
	      url: '/',
	      templateUrl: 'views/case2/index.html',
	      controller : 'Case2Ctrl'
	    })

	    .state('case1.contents', {
	      templateUrl: 'views/case1/contents.html'
	    })

	    .state('case2.contents', {
	      templateUrl: 'views/case2/contents.html'
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

	    .state('case1.video.references', {
	      templateUrl: 'views/case1/references.html'
	    })

	    .state('case1.video.menu', {
	      templateUrl: 'views/case1/menu.html'
	    })

	    .state('case1.video.decision', {
	      templateUrl: 'views/case1/decision.html'
	    })
 
	    .state('case2.video', {
	      templateUrl: 'views/case2/video/video.html'
	    })

	    .state('case2.video.info', {
	      templateUrl: 'views/case2/information.html'
	    })

	    .state('case2.video.hint', {
	      templateUrl: 'views/case2/hint.html'
	    })

	    .state('case2.video.expert', {
	      templateUrl: 'views/case2/expert.html'
	    })

	    .state('case2.video.references', {
	      templateUrl: 'views/case2/references.html'
	    })

	    .state('case2.video.menu', {
	      templateUrl: 'views/case2/menu.html'
	    })

	    .state('case2.video.decision', {
	      templateUrl: 'views/case2/decision.html'
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
	    })

	    .state('case1.assessment.references', {
	      templateUrl: 'views/case1/references.html'
	    })

	    .state('case1.assessment.menu', {
	      templateUrl: 'views/case1/menu.html'
	    })

	    .state('case1.assessment.decision', {
	      templateUrl: 'views/case1/decision.html'
	    })

	    .state('case2.assessment', {
	      templateUrl: 'views/case2/assessment/assessment.html',
	      controller : 'assessment2Ctrl'
	    })

	    .state('case2.assessment.info', {
	      templateUrl: 'views/case2/information.html'
	    })

	    .state('case2.assessment.hint', {
	      templateUrl: 'views/case2/hint.html'
	    })

	    .state('case2.assessment.expert', {
	      templateUrl: 'views/case2/expert.html'
	    })

	    .state('case2.assessment.references', {
	      templateUrl: 'views/case2/references.html'
	    })

	    .state('case2.assessment.menu', {
	      templateUrl: 'views/case2/menu.html'
	    })

	    .state('case2.assessment.decision', {
	      templateUrl: 'views/case2/decision.html'
	    });

	//function for adding a child information state to a state
	function addInformationState (val) {
	  $stateProvider
	  .state(val.num +'.video.info.'+val.name, {
	    templateUrl: 'views/'+ val.num +'/info/'+val.name+'.html'
	  })

	  .state(val.num +'.assessment.info.'+val.name, {
	    templateUrl: 'views/'+ val.num +'/info/'+val.name+'.html'
	  });
	}

	[
	{ num : 'case1', name : 'swollenLegs'},
	{ num : 'case1', name : 'trauma'},
	{ num : 'case1', name : 'cellulitis'},
	{ num : 'case1', name : 'vte'},
	{ num : 'case1', name : 'others'},
	{ num : 'case1', name : 'investigations'},
	{ num : 'case1', name : 'physicalExam'},
	{ num : 'case1', name : 'wells'},
	{ num : 'case1', name : 'dimerTest'},
	{ num : 'case1', name : 'thrombophilia'},
	{ num : 'case1', name : 'xray'},
	{ num : 'case1', name : 'ultrasound'},
	{ num : 'case1', name : 'anticoagulationTherapy'},
	{ num : 'case1', name : 'venogram'},
	{ num : 'case1', name : 'ctpa'},
	{ num : 'case1', name : 'ventilation'},
	{ num : 'case1', name : 'parenteralA'},
	{ num : 'case1', name : 'parenteralB'},
	{ num : 'case1', name : 'rivaroxaban'},
	{ num : 'case2', name : 'breathlessness'},
	{ num : 'case2', name : 'investigations'},
	{ num : 'case2', name : 'blood'},
	{ num : 'case2', name : 'vte'},
	{ num : 'case2', name : 'pe'},
	{ num : 'case2', name : 'others'},
	{ num : 'case2', name : 'physicalExam'},
	{ num : 'case2', name : 'wells'},
	{ num : 'case2', name : 'dimerTest'},
	{ num : 'case2', name : 'thrombophilia'},
	// { num : 'case2', name : 'xray'},
	{ num : 'case2', name : 'ultrasound'},
	{ num : 'case2', name : 'anticoagulationTherapy'},
	// { num : 'case2', name : 'venogram'},
	{ num : 'case2', name : 'ctpa'},
	{ num : 'case2', name : 'ventilation'},
	{ num : 'case2', name : 'option1'},
	{ num : 'case2', name : 'option2'},
	{ num : 'case2', name : 'option3'},
	{ num : 'case2', name : 'option4'}
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
		   // console.log(toState);

		   // $rootScope.currentState = toState.name;

		   

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
		   else if ($state.includes('*.*.references') && ($rootScope.stage === 6)) {
		   		$('.middle-section .button-bg').css({
		   			left : '0',
		   			opacity :'1'
		   		});
		   }
		   else if ($state.includes('*.*.references')) {
		   		$('.middle-section .button-bg').css({
		   			left : '300px',
		   			opacity :'1'
		   		});
		   } else{
		   	$('.middle-section .button-bg').css("opacity","0");
		   }

		   if($state.includes('*.assessment')){
		   		$('.bottom-menu').addClass('active');
		   }

		})


	}
]);

angular.module('ersimulationToolApp').controller('spcCtrl', function($scope){
	$scope.pdfUrl = 'pdf/Rivaroxaban_EU_SPC.PDF';
});

angular.module('ersimulationToolApp').controller('piCtrl', function($scope){
	$scope.pdfUrl = 'pdf/Rivaroxaban_UK_PI.PDF';
});