'use strict';

var myApp = angular.module('myApp.signin', [])

function url_base64_decode(str) {
  var output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
}

myApp.controller('SigninCtrl', ['$scope', '$http', '$log', "$location", '$cookies', '$cookieStore', '$rootScope', '$window', '$route', 'userService', function ($scope, $http, $log, $location, $cookies, $cookieStore, $rootScope, $window, $route, userService) {

  // $http.get('/app/jsons/users.json')
  // .success(function(data) {
  //   $scope.users = data;
  //  })

  $scope.submit = function() {
      $http
      .post('http://127.0.0.1:8080/authenticate', $scope.user)
      .success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        var encodedProfile = data.token.split('.')[1];
        var profile = JSON.parse(url_base64_decode(encodedProfile));
        $scope.welcome = 'Welcome ' + profile.first_name + ' ' + profile.last_name;

        $rootScope.auth.username = profile.first_name;
        $cookies['USERSTATUS'] = true;
        $rootScope.auth.isAuthenticated = true;
        $window.location.reload();
        $location.path('#');
      })
      .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;
          $scope.auth.isAuthenticated = false;

          // Handle login errors here
          alert("Error: Invalid user or password")
          // $scope.error = 'Error: Invalid user or password';
          $scope.welcome = '';
        });
    };
}])

myApp.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // handle the case where the user is not authenticated
      }
      return $q.reject(rejection);
    }
  };
});

myApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});


  // $scope.open = function (size) {

  //   var modalInstance = $modal.open({
  //     templateUrl: 'myModalContent.html',
  //     controller: 'ModalInstanceCtrl',
  //     size: size,
  //     resolve: {
  //       items: function () {
  //         return $scope.items;
  //       },
  //       master: function() {
  //         return $scope.master;
  //       }
  //     }
  //   });

  //   modalInstance.result.then(function (selectedItem) {
  //     $scope.selected = selectedItem;
  //   }, function () {
  //     $log.info('Modal dismissed at: ' + new Date());
  //   });
  // };
// }])



// .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, master) {

// 	$scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.signin = function(user) {
//     $scope.master = angular.copy(user);
//     if ($scope.master.name == "calvin" && $scope.master.password == "pass")
//     {
//       $modalInstance.dismiss('cancel');
//       alert("Welcome, Calvin.");
//     }
//   };

//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });