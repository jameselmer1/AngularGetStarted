﻿(function () {

    var github = function ($http) {

        //private implementation
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepo = function(username, reponame) {
            return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
                .then(function(response) {
                    return response.data;
                });
        };

        var getContributors = function(repo) {
            return $http.get(repo.contributors_url)
                .then(function(response) {
                    return response.data;
                });
        }

        return {
            //public API
            getUser: getUser,
            getRepos: getRepos,
            getRepo: getRepo,
            getContributors: getContributors
        };
    };

    var module = angular.module("githubViewer");

    //register it with Angular
    module.factory("github", github);
}());