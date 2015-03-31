'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:myPLayer
 * @description
 * # myPLayer
 */
angular.module('ersimulationToolApp')
  .directive('myPlayer', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          var vid,skip,loopVid,mainVideo,loopVideo;
          var videoPlayer = document.getElementsByTagName('video')[0];
          var playButton = document.getElementById("play-pause");
          var seekBar = document.getElementById("seek-bar");
          var skip = document.getElementsByClassName('skip-btn')[0];
          mainVideo = function(){

              switch(scope.stage){

                case 1 :
                vid = "videos/"+ attrs.stageone +".mp4";
                break;

                case 2 :
                vid = "videos/"+ attrs.stagetwo +".mp4";
                break;

                case 3 :
                vid = "videos/"+ attrs.stagethree +".mp4";
                break;

                default:
                scope.$state.go('home');
                break;

              }

              videoPlayer.src = vid;
              videoPlayer.loop = false;
              // videoPlayer.play();
          };

          // play the video
          mainVideo();

          loopVideo = function(){

              var videoPlayer = document.getElementsByTagName('video')[0];
              
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

          scope.$parent.backToLoop = function(){
            
            setTimeout(function(){
              loopVideo();
              console.log('loop me!');
            },50);

          };

          


          scope.$parent.replayVideo = function(){
            mainVideo();
            videoPlayer.play();
            $('.right-menu,.bottom-menu,.video-frame').removeClass('active');
          };

          //fires when video plays
          videoPlayer.onplay = function() {
              // Update the button to 'Pause'
              playButton.className = "pause";
          };


          //fires when video ends
          videoPlayer.onended = function(){
            console.log('ended!');
            $('.right-menu,.bottom-menu,.video-frame').addClass('active');
            loopVideo();
          };

          videoPlayer.onseeking = function() {
              console.log("Seek operation began!");
          };

          videoPlayer.onloadstart = function() {
              console.log("Starting to load video");
          };


          // skip button
          skip.addEventListener('click',function(){
            $('.right-menu,.bottom-menu,.video-frame').addClass('active');
            loopVideo();
          });

          // Event listener for the play/pause button
          playButton.addEventListener("click", function() {
            if (videoPlayer.paused == true) {
              // Play the video
              videoPlayer.play();

              // Update the button to 'Pause'
              playButton.className = "pause";
            } else {
              // Pause the video
              videoPlayer.pause();

              // Update the button to 'Play'
              playButton.className = "play";
            }
          });

          // Event listener for the seek bar
          seekBar.addEventListener("change", function() {
            // Calculate the new time
            var time = videoPlayer.duration * (seekBar.value / 100);

            // Update the video time
            videoPlayer.currentTime = time;
          });

          // Update the seek bar as the video plays
          videoPlayer.addEventListener("timeupdate", function() {
            // Calculate the slider value
            var value = (100 / videoPlayer.duration) * videoPlayer.currentTime;
            // Update the slider value
            seekBar.value = value;

            scope.$apply(function(){
               scope.$parent.progress = value;
            });
           
          });

      }
    };
  });

