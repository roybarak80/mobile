
var app = angular.module("fileManagerApp", [
  'ngRoute',
	'ngMaterial',
]);

app.config(function ($routeProvider ,$locationProvider) {
 

  

  
  
    $routeProvider
        .when('/',
        {
            templateUrl: 'vendor/app/home.html'
        })
    .otherwise({ redirectTo: '/' });
});
