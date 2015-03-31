'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:media element
 * @description
 * # media element
 */
angular.module('ersimulationToolApp')
  .directive('mediaElement', function () {
    return {
      restrict: 'A',
      replace : 'true',
      // template : '<video></video>',
      link: function (scope, element, attrs) {

        var vid,skip,loopVid,mainVideo,loopVideo;
        var videoPlayer = document.getElementsByTagName('video')[0];
  

        var player = $(element).mediaelementplayer({
          defaultVideoWidth: 1920,
          defaultVideoHeight: 1080,
          features: ['playpause','progress'],
          success: function(mediaElement, originalNode) {

            console.log('success');

            scope.$parent.replayVideo = function(){
              mainVideo();
              $('.right-menu,.bottom-menu,.video-frame').removeClass('active');
            }

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

              mediaElement.src = vid;
              mediaElement.loop = false;
              mediaElement.play();
            };

            loopVideo = function(){

              // if the loop video does not exist then place correct video in src
              if (!loopVid) {

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
                    
              }

                mediaElement.src = loopVid;
                mediaElement.play();
                mediaElement.loop = true;
              
            };

            // create skip video button
            skip = document.createElement('button');
            skip.innerText = 'SKIP VIDEO';
            skip.className = 'skip-btn';
            skip.addEventListener('click',function(){
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
              loopVideo();
            });
            document.getElementsByClassName('mejs-controls')[0].appendChild(skip);


            // fires when video plays
            mediaElement.onplay = function(){
              console.log('playing!');
            };

            //fires when video ends
            mediaElement.onended = function(){
              console.log('ended!');
              $('.right-menu,.bottom-menu,.video-frame').addClass('active');
              loopVideo();
            };

        }});

        
            mainVideo();

      }
    };
  });

  // angular.directive('', ['', function(){
  //   // Runs during compile
  //   return {
  //     // name: '',
  //     // priority: 1,
  //     // terminal: true,
  //     // scope: {}, // {} = isolate, true = child, false/undefined = no change
  //     // controller: function($scope, $element, $attrs, $transclude) {},
  //     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
  //     // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
  //     // template: '',
  //     // templateUrl: '',
  //     // replace: true,
  //     // transclude: true,
  //     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
  //     link: function($scope, iElm, iAttrs, controller) {
        
  //     }
  //   };
  // }]);


// new MediaElement('player1', {
//     // shows debug errors on screen
//     enablePluginDebug: false,
//     // remove or reorder to change plugin priority
//     plugins: ['flash','silverlight'],
//     // specify to force MediaElement to use a particular video or audio type
//     type: '',
//     // path to Flash and Silverlight plugins
//     pluginPath: '/myjsfiles/',
//     // name of flash file
//     flashName: 'flashmediaelement.swf',
//     // name of silverlight file
//     silverlightName: 'silverlightmediaelement.xap',
//     // default if the <video width> is not specified
//     defaultVideoWidth: 480,
//     // default if the <video height> is not specified     
//     defaultVideoHeight: 270,
//     // overrides <video width>
//     pluginWidth: -1,
//     // overrides <video height>       
//     pluginHeight: -1,
//     // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
//     // larger number is less accurate, but less strain on plugin->JavaScript bridge
//     timerRate: 250,
//     // method that fires when the Flash or Silverlight object is ready
//     success: function (mediaElement, domObject) { 
//          
//         // add event listener
//         mediaElement.addEventListener('timeupdate', function(e) {
//              
//             document.getElementById('current-time').innerHTML = mediaElement.currentTime;
//              
//         }, false);
//          
//         // call the play method
//         mediaElement.play();
//          
//     },
//     // fires when a problem is detected
//     error: function () { 
//      
//     }
// });
