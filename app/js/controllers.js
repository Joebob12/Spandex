'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $http) {
  	$scope.loadData = function (location) {
  		$scope.loading = true;
  		alert(location);
		$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&mode=json&units=imperial'}).
		    success(function(data, status, headers, config) {
		      // this callback will be called asynchronously
		      // when the response is available
		      console.log(data);
		      switch(data.weather[0].icon) {
		      	case "01d":
		      		$scope.weathericon = "B";
		      		break;
		      	case "01n":
		      		$scope.weathericon = "C";
		      		break;
		      	case "02d":
		      		$scope.weathericon = "H";
		      		break;
		      	case "02n":
		      		$scope.weathericon = "I";
		      		break;
		      	case "03d":
		      		$scope.weathericon = "N";
		      		break;
		      	case "03n":
		      		$scope.weathericon = "N";
		      		break;
		      	case "04d":
		      		$scope.weathericon = "Y";
		      		break;
		      	case "04n":
		      		$scope.weathericon = "Y";
		      		break;
		      	case "09d":
		      		$scope.weathericon = "Q";
		      		break;
		      	case "09n":
		      		$scope.weathericon = "Q";
		      		break;
		      	case "10d":
		      		$scope.weathericon = "R";
		      		break;
		      	case "10n":
		      		$scope.weathericon = "R";
		      		break;
		      	case "11d":
		      		$scope.weathericon = "O";
		      		break;
		      	case "11n":
		      		$scope.weathericon = "O";
		      		break;
		      	case "13d":
		      		$scope.weathericon = "W";
		      		break;
		      	case "13n":
		      		$scope.weathericon = "W";
		      		break;
		      	case "50d":
		      		$scope.weathericon = "M";
		      		break;
		      	case "50n":
		      		$scope.weathericon = "M";
		      		break;

		      }
		      $scope.maintemp = data.main.temp.toFixed(0);
		      $scope.hightemp = data.main.temp_max.toFixed(0);
		      $scope.lowtemp = data.main.temp_min.toFixed(0);
		      $scope.wind = data.wind.speed.toFixed(0);
		      $scope.humd = data.main.humidity.toFixed(0);
		    }).
		    error(function(data, status, headers, config) {
		      // called asynchronously if an error occurs
		      // or server returns response with an error status.
		    });
  	}

  });