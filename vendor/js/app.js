
var app = angular.module("fileManagerApp", [
  'ngRoute',
	'ngMaterial',
]);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/',
        {
            templateUrl: '/vendor/app/home.html'
        })
    .otherwise({ redirectTo: '/' });
});
