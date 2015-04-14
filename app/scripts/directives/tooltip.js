'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('ersimulationToolApp')
  .directive('tooltipIncorrect', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
          $(element).tooltipster({
            theme: 'my-custom-theme-incorrect',
            position : 'right',
            touchDevices : true
          });
      }
    };
  });

angular.module('ersimulationToolApp')
.directive('tooltipMissed', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
        $(element).tooltipster({
          theme: 'my-custom-theme-missed',
          position : 'right',
          touchDevices : true
        });
    }
  };
});

