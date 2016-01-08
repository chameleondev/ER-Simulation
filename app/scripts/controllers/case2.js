'use strict';

/**
 * @ngdoc function
 * @name ersimulationToolApp.controller:Case1Ctrl
 * @description
 * # Case1Ctrl
 * Controller of the ersimulationToolApp
 */
angular.module('ersimulationToolApp')
  .controller('Case2Ctrl', function ($scope,$timeout,$rootScope,$state,Nw) {

  	window.scope = $scope;

  	$scope.form = {};

  	$scope.createCerificate = Nw.createPdf;

	$scope.createCerificate = function(name,ref,appCase){
		Nw.createPdf(name,ref,appCase);
		$scope.cert = !$scope.cert;
	};

	$scope.showMenu = function(){
		$timeout(function(){
			$('.right-menu,.bottom-menu,.video-frame').addClass('active');
		},200)
		
	};

	console.log($state);

	$scope.toggleMenu = function(btn,section){

		if (!$state.includes('*.*.'+btn+'.**')) {
			$state.go('case2.'+section+'.'+btn);

		} else{
			$state.go('case2.'+section);
		}

	};

	$scope.changeStage = function(newStage){
        $rootScope.stage = newStage;
    };

	$scope.dispatchPatient = function(){
  		$rootScope.stage++;
  		$state.reload();
  	};


  });