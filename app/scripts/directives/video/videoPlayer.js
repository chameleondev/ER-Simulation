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
      link : function($scope, iElm, iAttrs, controller){



      		$scope.autoplay = true;
      		$scope.controls = true;
      		var vid,loopVid,loader,body;


      		switch($scope.stage){

      			case 1 :
      			vid = {src: "videos/"+ iAttrs.stageone +".mp4", type: "video/mp4"};
      			break;

      			case 2 :
      			vid = {src: "videos/"+ iAttrs.stagetwo +".mp4", type: "video/mp4"};
      			break;

      			case 3 :
      			vid = {src: "videos/"+ iAttrs.stagethree +".mp4", type: "video/mp4"};
      			break;

      			default:
      			$scope.$state.go('home');
      			break;

      		}


	      	$scope.config = {
				sources: [
					vid
				],
				// theme: "bower_components/videogular-themes-default/videogular.css",
				plugins: {
					// poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};


			$scope.onCompleteVideo = function(source){

				switch(source[0].src){
					case  "videos/"+ iAttrs.stageone +".mp4":
					case  "videos/"+ iAttrs.stagetwo +".mp4":
					case  "videos/"+ iAttrs.stagethree +".mp4":
					$scope.loader();
					$scope.controls = true;
					break;
				}

				
				$('.right-menu,.bottom-menu,.video-frame').addClass('active');
				$scope.$parent.loopVideo();
			};

			$scope.onPlayerReady = function(API){

				$scope.$parent.replay = function(){

					$scope.loader();

					switch($scope.stage){

		      			case 1 :
		      			vid = {src: "videos/"+ iAttrs.stageone +".mp4", type: "video/mp4"};
		      			break;

		      			case 2 :
		      			vid = {src: "videos/"+ iAttrs.stagetwo +".mp4", type: "video/mp4"};
		      			break;

		      			case 3 :
		      			vid = {src: "videos/"+ iAttrs.stagethree +".mp4", type: "video/mp4"};
		      			break;

		      			default:
		      			$scope.$state.go('home');
		      			break;

		      		}

		      		$scope.config.sources = [vid];
		      		$scope.controls = true;
					API.play();
					$('.right-menu,.bottom-menu,.video-frame').removeClass('active');
				};

				$scope.$parent.skipVideo = function(){
					$scope.loader();
					$scope.$parent.loopVideo();
					$('.right-menu,.bottom-menu,.video-frame').addClass('active');
				};

				$scope.$parent.loopVideo = function(){

					switch($scope.stage){

		      			case 1 :
		      			loopVid = {src: "videos/"+ iAttrs.stageoneloop +".mp4", type: "video/mp4"};
		      			break;

		      			case 2 :
		      			loopVid = {src: "videos/"+ iAttrs.stagetwoloop +".mp4", type: "video/mp4"};
		      			break;

		      			case 3 :
		      			loopVid = {src: "videos/"+ iAttrs.stagethreeloop +".mp4", type: "video/mp4"};
		      			break;

		      		}



		      		if ($scope.config.sources[0].src !== loopVid.src) {
		      			$scope.config.sources = [loopVid];
		      		}

		      		$('.right-menu,.bottom-menu,.video-frame').addClass('active');

		      		$scope.controls = false;


		      		setTimeout(function(){
		      			API.play();
		      		},100);
		      			
				};

				$scope.$parent.backToLoop = function(){

					setTimeout(function(){
		      			$scope.loopVideo();
		      		},50);

				};

				$scope.$parent.loader = function(){

					loader = document.createElement('div');
					loader.className = 'loader';

					body = document.getElementsByTagName('body')[0];
					body.appendChild(loader);

					setTimeout(function(){
						loader.parentNode.removeChild(loader);
					},2000);

				};

				
			};

			
      }
    };
  });

