(function () {
	'use strict';
	angular.module('weatherApp')
		.controller('weatherController', weatherController);

	weatherController.$inject = ['weatherFactory'];

	function weatherController(weatherFactory) {
		var vm = this;
		vm.cityName;
		vm.submitCity = submitCity;
		vm.historyList=[];

		function submitCity(x) {
			weatherFactory.getWeather(x).then(function(data){
				console.log(data);
				vm.cityName = data.data;
				vm.historyList.push({"timeAndDate": Date.now(), "name": vm.cityName.name});

			});

			};

}})();