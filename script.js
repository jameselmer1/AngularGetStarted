// Code goes here
(function () {
  var app = angular.module("githubViewer", []);

  var MainController = function ($scope, $http) {
    var onUserComplete = function (response) {
      $scope.user = response.data;
    };

    var onError = function (reason) {
      $scope.error = "Error";
    };

    $http.get("https://api.github.com/users/" + username)
      .then(onUserComplete, onError);

    $scope.message = "It turns out Harold's not a jedi";
  };


  app.controller("MainController", ["$scope", "$http", MainController]);
} ());