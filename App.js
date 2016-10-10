(function () {
    var app = angular.module("githubViewer", ["ngRoute"]);

    app
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/main", {
                    templateUrl: "main.html",
                    controller: "MainController"
                })
                .when("/user/:username", {
                    templateUrl: "user.html",
                    controller: "UserController"
                })
                .when("/repo/:username/:reponame", {
                    templateUrl: "",
                    controller: ""
                });
            //.otherwise({ redirectTo: "/main" });

            // use the HTML5 History API to allow angular to change the browser history
            // without refreshing the page
            $locationProvider.html5Mode(true);

        });

    

}());