'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
'ui.bootstrap',
'ngRoute',
'ngCookies',

////////////////Video player ///////////////
"ngSanitize",
"com.2fdevs.videogular",
"com.2fdevs.videogular.plugins.controls",
"com.2fdevs.videogular.plugins.overlayplay",
"com.2fdevs.videogular.plugins.poster",
////////////////Video player ///////////////

'myApp.matching',
'myApp.authService',
'ngMessages',
'myApp.videoList',
'myApp.videoDetail',
'myApp.signin',
'myApp.signup',
'myApp.version',
]).
config(['$routeProvider',
function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'views/video-list.view.html',
      controller: 'VideoListCtrl',
    }).
  when('/video/:videoId', {
      templateUrl: 'views/video-detail.view.html',
      controller: 'VideoDetailCtrl'
    }).
  when('/signin', {
      templateUrl: 'views/signin.view.html',
      controller: 'SigninCtrl'
    }).
  when('/signup', {
      templateUrl: 'views/signup.view.html',
      controller: 'SignupCtrl'
    }).
  otherwise({redirectTo: '/'});
}])

.run(function($rootScope) {
  $rootScope.auth = {};
  $rootScope.auth.username = '';
  $rootScope.auth.isAuthenticated = false;
})

.controller('ProfileCtrl', ['$scope', '$cookies', 'userService', '$cookieStore', '$rootScope', '$route', function ($scope, $cookies, userService, $cookieStore, $rootScope, $route) {
  // $scope.isAuthenticated = $rootScope.isAuthenticated;
  $scope.auth.username = $rootScope.auth.username;
  // $scope.isUserLogged = $cookies['loggedIn'];

    $scope.cookies = {};
    $scope.cookies.userStatus = $cookies['USERSTATUS'];

    $scope.logout = function () {
    $scope.welcome = '';
    $scope.message = '';
    delete $cookies['USERSTATUS'];
    delete $scope.cookies.userStatus;
    $scope.cookies.userStatus = undefined;
    $rootScope.auth.isAuthenticated = false;
    $rootScope.auth.username = '';
    $route.reload();
  };
}])

// .controller('VideosCtrl', function ($scope, $http) {
//   $http.get('videos/videos.json').success(function(data) {
//     $scope.videos = data;
//   })})

// .controller('VideoDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
// $http.get('videos/videos.json').success(function(data) {
//       $scope.phone = data;
//     });
// }]);