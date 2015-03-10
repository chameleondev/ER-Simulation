'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('ersimulationToolApp')
  .directive('tooltip', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          $(element).tooltipster({
            theme: 'my-custom-theme',
            position : 'right',
            touchDevices : true
          });
      }
    };
  });

