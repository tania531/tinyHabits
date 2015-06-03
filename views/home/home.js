angular.module("tinyHabits")
.controller('homeCtrl', function($scope, $state){
  $scope.goToList = function(){
    $state.go('list');
  }
  $scope.startNewHabit = function(){
    $state.go('new');
  };
});
