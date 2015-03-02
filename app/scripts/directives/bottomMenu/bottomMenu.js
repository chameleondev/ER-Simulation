'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:video
 * @description
 * # video
 */
angular.module('ersimulationToolApp')
  .directive('bottomMenu', function () {
    return {
      templateUrl: 'scripts/directives/bottomMenu/bottomMenu.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude,$sce) {

      },
      link: function postLink(scope, element, attrs) {
        // element.text('this is the video directive');
      }
    };
  });

