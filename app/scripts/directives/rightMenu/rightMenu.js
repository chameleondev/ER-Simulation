'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:video
 * @description
 * # video
 */
angular.module('ersimulationToolApp')
  .directive('rightMenu', function () {
    return {
      templateUrl: 'scripts/directives/rightMenu/rightMenu.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude,$sce) {

      },
      link: function postLink(scope, element, attrs) {
        // element.text('this is the video directive');
      }
    };
  });

