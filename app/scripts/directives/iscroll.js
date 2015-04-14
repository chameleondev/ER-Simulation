'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:iscroll
 * @description
 * # iscroll
 */
angular.module('ersimulationToolApp')
  .directive('scroller', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

          element.css({
              overflow : 'hidden',
              position : 'relative',
              height : attrs.scrollheight
          });

          var myScroll = new IScroll(element[0],{
            scrollbars: true,
            bounce : false,
            fadeScrollbars : true
          });

      }
    };
  });

