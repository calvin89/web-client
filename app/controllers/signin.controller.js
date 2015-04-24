'use strict';

angular.module('myApp.signin', [])

.controller('SigninCtrl', ['$scope', '$http', '$log', "$location", '$cookies', '$cookieStore', 'userService', function ($scope, $http, $log, $location, $cookies, $cookieStore, userService) {

  $http.get('/app/jsons/users.json')
  .success(function(data) {
    $scope.users = data;
   })

  $scope.submit = function() {
      for(var i=0; i < $scope.users.length; i++) {
        if ($scope.users[i].username == $scope.user.username &&
            $scope.users[i].password == $scope.user.password) {
          $cookieStore.put("loggedIn", 'true');
          $location.path('#');

          userService.set(true, $scope.user.username);
          // userService.username = $scope.user.username;
          alert("Hi " + userService.get().username + "!");
          break;
        }
        if (i == $scope.users.length - 1) {
          userService.isLogged = false;
          userService.username = '';
          alert("Wrong username or password!");
        }
      }
    };
}])
  // $scope.submit = function() {
  // $scope.items = ['item1', 'item2', 'item3'];
  // $scope.master = {};



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