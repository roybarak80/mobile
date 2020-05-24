
var app = angular.module("fileManagerApp", [
  'ngRoute',
	'ngMaterial',
]);

app.config(function ($routeProvider ,$locationProvider) {
 

  // Remove # from URL
  $locationProvider.html5Mode(true);

  
  
    $routeProvider
        .when('/',
        {
            templateUrl: 'views/home.html'
        })
    .otherwise({ redirectTo: '/' });
});
