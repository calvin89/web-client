'use strict';

angular.module('myApp.videoDetail', ['ngCookies'])

.controller('VideoDetailCtrl', ['$scope', '$routeParams', '$http', '$sce', function ($scope, $routeParams, $http, $sce) {
var videoUrl = '';
$http.get('jsons/video.json').success(function(data) {
      $scope.video = data;
      $scope.videoId = $routeParams.videoId;
      videoUrl = $scope.video.url;
    })
this.config = {
				sources: [
					// {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("tos_320_180.webm"), type: "video/webm"}
					// {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "bower_components/videogular-themes-default/videogular.css",
				plugins: {
					poster: ""
				}
			};
}]);