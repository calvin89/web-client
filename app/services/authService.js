'use strict';

angular.module('myApp.authService', [])

.service('userService', [function($scope) {
  // var user = {
  //   isLogged: false,
  //   username: ''
  // };
  var user = {};
  user.isLogged = false;
  user.isLogged = '';

  this.set = function(isLogged, username) {
  	user.isLogged = isLogged;
  	user.username = username;
  }
  this.get = function() {
  	return user;
  }
}]);