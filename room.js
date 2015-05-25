angular.module('tinyHabitsTracker', [])
.controller('roomCtrl', ['$scope', function($scope){
  console.info('room contoller initialized');
  $scope.room = '';
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