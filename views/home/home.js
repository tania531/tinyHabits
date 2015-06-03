angular.module("tinyHabits")
.controller('homeCtrl', function($scope, $state){
  $scope.goToList = function(){
    $state.go('list');
  }
  console.log('home controller');
});
// .controller('habitCtrl', function($scope, $state){
//   $scope.goToList = function(){
//     $state.go('new');
//   }
// });
