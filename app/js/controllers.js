'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $http) {
	// by default we hdie the weather and not found divs
	$scope.displayed = 'hideit';
	$scope.notFound = 'hideit';

	// Our directive class this function and passes in the location from the text box
  	$scope.loadData = function (location) {

  		// On click we hide all of these divs
  		$scope.displayed = 'hideit';
  		$scope.welcome = 'hideit';
  		$scope.notFound = 'hideit';

  		// do some ajax magic
		$http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&mode=json&units=imperial'}).
		    success(function(data, status, headers, config) {
		      // this callback will be called asynchronously
		      // when the response is available
		      if (data.cod === "404") {
		      	// show city wasn't found div
		      	$scope.notFound = '';
		      }
		      else {
			      // this function passes the json reponse and we decide on the icon to use
			      $scope.checkIcon(data.weather[0].icon);
			      // assign response json to matching varibles
			      $scope.maintemp = data.main.temp.toFixed(0);
			      $scope.hightemp = data.main.temp_max.toFixed(0);
			      $scope.lowtemp = data.main.temp_min.toFixed(0);
			      $scope.wind = data.wind.speed.toFixed(0);
			      $scope.humd = data.main.humidity.toFixed(0);
			      // show the weather div with a sweet animation
			      $scope.displayed = 'flipInY';
		      }
		    }).
		    error(function(data, status, headers, config) {
		      // called asynchronously if an error occurs
		      // or server returns response with an error status.
		      // let's just show the city not found div for now
		      $scope.notFound = '';
		    });
  	}

  	$scope.checkIcon = function (iconres) {
  		// relates to the json repsonses of the api we are using
  		switch(iconres) {
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
  	}

  });