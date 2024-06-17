// app.js

var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope, $http) {
  $scope.getWeather = function() {
    const apiKey = 'OPEN_WEATHER_API_KEY';  // Replace with your actual API key from OpenWeather
    const city = $scope.city;

    if (!apiKey) {
      alert('Please provide your OpenWeather API key.');
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    $http.get(url).then(function(response) {
      $scope.weatherData = response.data;
      $scope.errorMsg = null; // Clear error message if data fetched successfully
    }, function(error) {
      console.error('Error fetching weather data:', error);
      $scope.weatherData = null;
      $scope.errorMsg = 'Could not retrieve weather data. Please check your city name and try again.';
    });
  };
});
