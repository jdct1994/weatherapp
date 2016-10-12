(function() {
	'use strict';
	angular.module('weatherApp')
		.factory('weatherFactory', weatherFactory);

	// Weather Factory requires HTTP and Toastr modules
	weatherFactory.$inject = ["$http"];


	function weatherFactory($http){
		var service = {
			getWeather : getWeather
		};

		return service;

		// API call

		function getWeather(city){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + 
				"&APPID=84ae6a6239dd1042a905a1817507774b&units=imperial&type=accurate")
		}

	}

})();
