'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ngMessages',
  'myApp.view1',
  'myApp.view2',
  'myApp.signin',
  'myApp.signup',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('TrendVideosCtrl', function ($scope, $http) {
  $http.get('trend_videos/trend_videos.json').success(function(data) {
    $scope.trendVideos = data;
  })});