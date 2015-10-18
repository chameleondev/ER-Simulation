'use strict';

angular.module('ersimulationToolApp').factory('Progress', function(){
	return {
		case1 : {
            section1Complete : false,
            section2Complete : false,
            section3Complete : false,
            section4Complete : false
        },
	};
})