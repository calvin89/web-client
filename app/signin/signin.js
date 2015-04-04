'use strict';

angular.module('myApp.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'SigninCtrl'
  });
}])

.controller('SigninCtrl', [function() {

}]);

//  $(document).ready(function () {
//     $('.forgot-pass').click(function(event) {
//       $(".pr-wrap").toggleClass("show-pass-reset");
//     }); 
    
//     $('.pass-reset-submit').click(function(event) {
//       $(".pr-wrap").removeClass("show-pass-reset");
//     }); 
// });