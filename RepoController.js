(function () {
    var app = angular.module("githubViewer");

    var RepoController = function ($scope, $routeParams, github) {

        var onError = function (reason) {
            $scope.error = "Could not get user";
        };

        var onGetContributorsComplete = function(data) {
            $scope.contributors = data;
        }

        var onRepoComplete = function (data) {
            $scope.repo = data;
            github.getContributors($scope.repo).then(onGetContributorsComplete, onError);
        };
        
        $scope.hideError = function () {
            $scope.error = "";
        }

        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        $scope.error = "";
        
        //bootstrapper
        github.getRepo($scope.username, $scope.reponame).then(onRepoComplete, onError);
    };


    app.controller("RepoController", RepoController);
}());