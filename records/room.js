angular.module('tinyHabitsTracker', [])
.controller('habitCtrl', ['$scope', function($scope){
  console.info('habit contoller initialized');
  $scope.habit = '';
  $scope.addRoom = function(room){
    $scope.room = room;
  };
  $scope.addCount = function(count){
    $scope.count = count;
  };
  $scope.addName = function(name){
    $scope.name = name;
  };
}]);
