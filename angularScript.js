(function () {
    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $scope.userDetailsView = 'userDetails.html';
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
            $scope.userReposView = 'userRepos.html';
        };

        var onError = function (reason) {
            $scope.error = "Could not get user";
        };

        $scope.hideError = function() {
            $scope.error = "";
        }

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
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


    app.controller("MainController", ["$scope", "$http", MainController]);
}());