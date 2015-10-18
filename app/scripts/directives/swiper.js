'use strict';

/**
 * @ngdoc directive
 * @name ersimulationToolApp.directive:swiper
 * @description
 * # swiper
 */
angular.module('ersimulationToolApp')
  .directive('swiper', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        console.log(element[0]);

        var mySwiper = new Swiper (element[0], {
          // Optional parameters
          direction: 'horizontal',
          loop: true
        
        })     

      }
    };
  });

