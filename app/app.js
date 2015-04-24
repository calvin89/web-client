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
  when('/videos/:videoId', {
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

// .controller('LoginCtrl', ['$cookies', 'userService', '$cookieStore', function ($scope, $cookies, userService, $cookieStore ) {
//   // $scope.isUserLogged = userService.get().username;
//   $scope.isUserLogged = $cookies['loggedIn'];
// }])

// .controller('VideosCtrl', function ($scope, $http) {
//   $http.get('videos/videos.json').success(function(data) {
//     $scope.videos = data;
//   })})

// .controller('VideoDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
// $http.get('videos/videos.json').success(function(data) {
//       $scope.phone = data;
//     });
// }]);