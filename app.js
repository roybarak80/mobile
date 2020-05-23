
var app = angular.module("fileManagerApp", [
  'ngRoute',
	'ngMaterial',
]);

app.config(function ($routeProvider ,$locationProvider) {
  var contentPath = 'app/content/';

  // Remove # from URL
  $locationProvider.html5Mode(true);

  
  
    $routeProvider
        .when('/',
        {
            templateUrl: 'vendor/app/home.html'
        })
    .otherwise({ redirectTo: '/' });
});
