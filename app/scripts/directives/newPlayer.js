'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:newPlayer
 * @description
 * # newPlayer
 */
angular.module('ersimulationToolApp')
  .directive('newPlayer', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          var vid,skip,loopVid,mainVideo,loopVideo,poster;

          var videoPlayer = $(element)[0];


          mainVideo = function(){

              switch(scope.stage){

                case 1 :
                vid = "videos/"+ attrs.stageone +".mp4";
                poster = "images/"+ attrs.stageoneposter +".jpg";
                break;

                case 2 :
                vid = "videos/"+ attrs.stagetwo +".mp4";
                poster = "images/"+ attrs.stagetwoposter +".jpg";
                break;

                case 3 :
                vid = "videos/"+ attrs.stagethree +".mp4";
                poster = "images/"+ attrs.stagethreeposter +".jpg";
                break;

                case 4 :
                vid = "videos/"+ attrs.stagefour +".mp4";
                poster = "images/"+ attrs.stagefourposter +".jpg";
                break;

                case 5 :
                vid = "videos/"+ attrs.stagefive +".mp4";
                poster = "images/"+ attrs.stagefiveposter +".jpg";
                break;

                default:
                scope.$state.go('home');
                break;

              }

              console.log(poster);

              videoPlayer.src = vid;
              videoPlayer.setAttribute('poster',poster);
              videoPlayer.loop = false;
              // videoPlayer.play();
          };

          // load the main video
          mainVideo();

          loopVideo = function(){

              // var videoPlayer = document.getElementsByTagName('video')[0];
              
              // if the loop video does not exist then place correct video in src
              // if (!loopVid) {

                    switch(scope.stage){

                      case 1 :
                      loopVid = "videos/"+ attrs.stageoneloop +".mp4";
                      break;

                      case 2 :
                      loopVid = "videos/"+ attrs.stagetwoloop +".mp4";
                      break;

                      case 3 :
                      loopVid = "videos/"+ attrs.stagethreeloop +".mp4";
                      break;

                    }
                    
              // }

                videoPlayer.src = loopVid;
                videoPlayer.play();
                videoPlayer.loop = true;

                $('.right-menu,.bottom-menu,.video-frame').addClass('active');
              
          };

          scope.$parent.replayVideo = function(){
            $('.right-menu,.bottom-menu,.video-frame').removeClass('active');
          };

          scope.$parent.backToLoop = function(){
            setTimeout(function(){
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
            },50);
          };

          videoPlayer.onended = function(){
            console.log('ended!');
            if (scope.stage !== 5) {
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
            } else{

              scope.$parent.caseEnd = true;
              scope.$apply();
            };
            videoPlayer.className = "stopped";
            // loopVideo();
          };

          videoPlayer.onplay = function(){
            console.log('playing!');
            $('.right-menu,.bottom-menu,.video-frame').removeClass('active');
            videoPlayer.className = "";
          };

      }
    };
  });

