'use strict';

angular.module('myApp.authService', [])

.service('userService', [function($scope) {
  // var user = {
  //   isLogged: false,
  //   username: ''
  // };
  var user = {};
  var isLogged = false;
  var username = '';

  user.set = function(isLogged, userName) {
  	isLogged = isLogged;
  	username = userName;
  }
  user.get = function() {
    return username;
  }
  return user;
}]);