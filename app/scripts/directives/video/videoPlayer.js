'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:video
 * @description
 * # video
 */
angular.module('ersimulationToolApp')
  .directive('videoPlayer', function () {
    return {
      templateUrl: 'scripts/directives/video/videoPlayer.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude,$sce,$timeout) {

      	$scope.autoplay = true;


      	$scope.config = {
			sources: [
				{src: $sce.trustAsResourceUrl("videos/"+ $attrs.video +".mp4"), type: "video/mp4"}
			],
			// theme: "bower_components/videogular-themes-default/videogular.css",
			plugins: {
				// poster: "http://www.videogular.com/assets/images/videogular.png"
			}
		};


		$scope.onCompleteVideo = function(){
			$('.right-menu,.bottom-menu,.video-frame').addClass('active');
		};

		$scope.onPlayerReady = function(API){

			$scope.$parent.replay = function(){
				API.play();
				$('.right-menu,.bottom-menu,.video-frame').toggleClass('active');
				// $scope.$parent.showMenu = false;
			};
		};

		$scope.$parent.showMenu = function(){
			$timeout(function(){
				$('.right-menu,.bottom-menu,.video-frame').addClass('active');
			},200)
			
		};
		

      }
    };
  });

