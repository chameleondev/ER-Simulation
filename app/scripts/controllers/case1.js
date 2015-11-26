'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:Case1Ctrl
 * @description
 * # Case1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('Case1Ctrl', function ($scope,$timeout,$rootScope,$state,Nw) {

  	// if(is_nwjs()){
  	// 	alert('nw js!');
  	// 	$scope.osType = Nw.osType();
  	// }
  	

  	window.scope = $scope;

  	$scope.form = {};

  	scope.createCerificate = function(uri, name){
  		$scope.cert = !$scope.cert;
  		var link = document.createElement("a");
	    link.download = name;
	    link.href = uri;
	    link.click();
  	};

	$scope.showMenu = function(){
		$timeout(function(){
			$('.right-menu,.bottom-menu,.video-frame').addClass('active');
		},200)
		
	};

	console.log($state.params);

	$scope.toggleMenu = function(btn,section){



		if (!$state.includes('*.*.'+btn+'.**')) {
				$state.go('case1.'+section+'.'+btn);

		} else{
			$state.go('case1.'+section)
		};


	};

    $scope.changeStage = function(newStage){
        $rootScope.stage = newStage;
    };

	$scope.dispatchPatient = function(){
  		$rootScope.stage++;
  		$state.reload();
  	};

  });
