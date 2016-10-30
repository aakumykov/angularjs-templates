'use strict';

angular.module('MyApp').
filter('myFilter', function(){
	return function(input) {
		return '/фильтрованная ('+input+')/';
	}
});