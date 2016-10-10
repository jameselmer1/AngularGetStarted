(function () {
    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $log, $anchorScroll, $location, github) {

        var onRepos = function (data) {
            $scope.repos = data;
            $scope.userReposView = 'userRepos.html';
        };

        var onError = function (reason) {
            $scope.error = "Could not get user";
        };


        var onUserComplete = function (data) {
            $scope.user = data;
            $scope.userDetailsView = 'userDetails.html';
            $location.hash("userDetails");
            $anchorScroll();

            github.getRepos($scope.user).then(onRepos, onError);
        };

        
        $scope.hideError = function() {
            $scope.error = "";
        }

        $scope.search = function (username) {
            $log.info(username);
            github.getUser(username).then(onUserComplete, onError);
        };

        $scope.username = "robconery";
        $scope.message = "Search Github";
        $scope.error = "";
        $scope.userDetailsView = "";
        $scope.userReposView = "";
        
        $scope.sortName = 'stargazers_count';   // set the default sort column name
        $scope.sortReverse = true;             // set the default sort order
        $scope.searchRepos = '';                // set the default search/filter term
    };


    app.controller("MainController", MainController);
}());