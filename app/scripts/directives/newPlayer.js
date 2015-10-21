'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:newPlayer
 * @description
 * # newPlayer
 */
angular.module('ersimulationToolApp')
  .directive('newPlayer', function ($state) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          var vid,skip,loopVid,mainVideo,loopVideo,poster;

          var videoPlayer = $(element)[0];

          window.film = videoPlayer;


          mainVideo = function(){

              switch(scope.stage){

                case 1 :
                vid = "videos/"+ attrs.stageone +".ogv";
                poster = "videos/"+ attrs.stageoneposter +".png";
                break;

                case 2 :
                vid = "videos/"+ attrs.stagetwo +".ogv";
                poster = "videos/"+ attrs.stagetwoposter +".png";
                break;

                case 3 :

                if ($state.includes('case2.*')) {
                  vid="";
                  $('.right-menu,.bottom-menu,.video-frame').addClass('active');
                } else {
                  vid = "videos/"+ attrs.stagethree +".ogv";
                }
                poster = "videos/"+ attrs.stagethreeposter +".png";
                break;

                case 4 :
                vid = "videos/"+ attrs.stagefour +".ogv";
                poster = "videos/"+ attrs.stagefourposter +".png";
                break;

                case 5 :
                vid = "videos/"+ attrs.stagefive +".ogv";
                poster = "videos/"+ attrs.stagefiveposter +".png";
                break;

                case 6 :
                vid = "videos/"+ attrs.stagesix +".ogv";
                poster = "videos/"+ attrs.stagesixposter +".png";
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
                      loopVid = "videos/"+ attrs.stageoneloop +".ogv";
                      break;

                      case 2 :
                      loopVid = "videos/"+ attrs.stagetwoloop +".ogv";
                      break;

                      case 3 :
                      loopVid = "videos/"+ attrs.stagethreeloop +".ogv";
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
            if (scope.stage < 5) {
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
            } else if (scope.stage === 5){
                scope.$parent.dispatch = true;
                scope.$apply();
                // $rootScope.stage++;
            } else {
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
              scope.$parent.caseEnd = true;
              scope.$apply();
            };
            videoPlayer.className = "stopped";
            videoPlayer.load();
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

