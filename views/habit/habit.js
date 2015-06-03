angular.module("tinyHabits")
.controller('habitCtrl', function($scope, $state, $firebaseArray){

  console.log('habit crtl called');
  var ref = new Firebase("https://tinyhabits.firebaseio.com/");

  var habitList = $firebaseArray(new Firebase("https://tinyhabits.firebaseio.com/"));

  $scope.habitList = habitList;
  $scope.habit = null;

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

  };

  $scope.goToList = function(){
    $state.go('new');
  };

});
