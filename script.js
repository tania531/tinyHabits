// Code goes here

var app = angular.module("tinyHabits", ['firebase']);
app.controller('habitCtrl',function($scope, $firebaseObject, $firebaseArray){
  var ref = new Firebase("https://tinyhabits.firebaseio.com/");

  var habitList = $firebaseArray(new Firebase("https://tinyhabits.firebaseio.com/"));

  $scope.habitList = habitList;

  $scope.addHabit = function(habit){
    habitList.$add({
      name: $scope.habit.name,
      tinyAction: $scope.habit.tinyAction,
      trigger: $scope.habit.trigger,
      compliment: $scope.habit.compliment,
      date: Date(),
      completed: false
    });

    $scope.habit = {};
    // console.log($scope.habitList);
  };
  $scope.editHabit = function(habit){
    $scope.habit = habit;
  };

  $scope.deleteHabit = function(habit){
    habitList.$remove(habit);
  };
});
