'use strict';

angular.module('myApp.signup', ['ngRoute'])

.controller('SignupCtrl', [function() {

}]);


// (function() {

//   var app = angular.module("myApp.signup", ["ngRoute","ngMessages"]);

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/signup', {
//         templateUrl: 'signup/signup.html',
//         controller: 'SignupCtrl'
//       });
//   }]);

//   var SignupCtrl = function($scope) {
//     var model = this;

//     model.message = "";

//     $scope.user = {
//       username: "",
//       password: "",
//       confirmPassword: "",
//       submitted: false
//     };

//     $scope.submit = function(isValid) {
//       ($scope.user.password == $scope.user.passwordConfirm)? (isValid = true):(isValid = false);
//       if (isValid) {
//         $scope.user.submitted = true;
//         console.log("Submitted " + $scope.user.submitted);
//         model.message = "Submitted " + $scope.user.username;
//         alert("Signed up!");
//       } else {
//         $scope.user.submitted = false;
//         alert("The fields are empty or passwords don't match!");
//       }
//     };

//     $scope.compareTo = function () {
//       return {
//         require: "ngModel",
//         scope: {
//           otherModelValue: "=compareTo"
//         },
//         link: function(scope, element, attributes, ngModel) {

//           ngModel.$validators.compareTo = function(modelValue) {
//             console.log("modelValue = " + modelValue + "  otherModelValue = " + otherModelValue);
//             return modelValue == scope.otherModelValue;
//           };

//           scope.$watch("otherModelValue", function() {
//             ngModel.$validate();
//           });
//         }
//       };
//     };

//   };

  // app.directive("compareTo", compareTo);
  // app.controller("SignupCtrl", ["$scope", SignupCtrl]);

//   app.controller("SignupCtrl", ["$scope", SignupCtrl]);
//   // app.directive("compareTo", compareTo);  

// }());




// (function() {

//   var app = angular.module("myApp.signup", ["ngRoute", "ngMessages"]);

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/signup', {
//     templateUrl: 'signup/signup.html',
//     controller: 'SignupCtrl'
//   });
// }]);

//   var SignupCtrl = function() {
//     var model = this;

//     model.message = "";

//     model.user = {
//       username: "",
//       password: "",
//       confirmPassword: ""
//     };

//     model.submit = function(isValid) {
//       console.log("h");
//       if (isValid) {
//         model.message = "Submitted " + model.user.username;
//         alert("valid");
//       } else {
//         model.message = "There are still invalid fields below";
//         alert("not valid");
//       }
//     };

//   };

//   var compareTo = function() {
//     return {
//       require: "ngModel",
//       scope: {
//         otherModelValue: "=compareTo"
//       },
//       link: function(scope, element, attributes, ngModel) {

//         ngModel.$validators.compareTo = function(modelValue) {
//           return modelValue == scope.otherModelValue;
//         };

//         scope.$watch("otherModelValue", function() {
//           ngModel.$validate();
//         });
//       }
//     };
//   };

//   // app.directive("compareTo", compareTo);
//   // app.controller("SignupCtrl", SignupCtrl);

// }());