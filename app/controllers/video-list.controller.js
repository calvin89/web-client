'use strict';

angular.module('myApp.videoList', ['ngCookies'])

.controller('VideoListCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {
  $http.get('jsons/videos.json').success(function(data) {
    $scope.videos = data;
  })
   //    $scope.isUserLogged = $cookies['loggedIn'];
  	// alert("cookie: " + $scope.isUserLogged);
}])
