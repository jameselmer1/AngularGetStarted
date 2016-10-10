(function () {
    var app = angular.module("githubViewer");

    var MainController = function ($scope, $location, $log) {

        $scope.search = function (username) {
            $log.info(username);
            $location.path("/user/" + username);
        };

        $scope.username = "robconery";
        $scope.message = "Search Github";
        
    };


    app.controller("MainController", MainController);
}());