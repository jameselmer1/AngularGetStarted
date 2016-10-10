(function () {
    var app = angular.module("githubViewer");

    var UserController = function ($scope, github, $routeParams) {

        var onRepos = function (data) {
            $scope.repos = data;
            $scope.userReposView = 'userRepos.html';
        };

        var onError = function (reason) {
            $scope.error = "Could not get user";
        };


        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        
        $scope.hideError = function() {
            $scope.error = "";
        }

        $scope.username = $routeParams.username;
        $scope.error = "";
        $scope.userReposView = "";
        
        $scope.sortName = 'stargazers_count';   // set the default sort column name
        $scope.sortReverse = true;             // set the default sort order
        $scope.searchRepos = '';                // set the default search/filter term

        //bootstrapper
        github.getUser($scope.username).then(onUserComplete, onError);
    };


    app.controller("UserController", UserController);
}());