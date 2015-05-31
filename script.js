
var app = angular.module("tinyHabits", ['firebase']);
// app.config(function($stateProvider, $urlRouterProvider){
//   $urlRouterProvider.otherwise('/');
//   $stateProvider
//   .state('list', {url:'/', templateUrl: 'list.html', controller:'habitCtrl'});
// });
app.controller('habitCtrl', function($scope,  $firebaseArray){
  var ref = new Firebase("https://tinyhabits.firebaseio.com/");

  var habitList = $firebaseArray(new Firebase("https://tinyhabits.firebaseio.com/"));

  $scope.habitList = habitList;
  $scope.habit = null;

  $scope.showList = function(){
    $scope.habit = null;
    $scope.display = false;
  };

  $scope.showDetails = function(habit){
    $scope.display = true;
    $scope.showHabit(habit);
  };

  $scope.showHabit = function(habit){
    $scope.habit = habit;
  };

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
    console.log('$scope.habit.new: ', $scope.habit.new);

    // habitList.$save(habit).then(function(ref){
    //   console.log('habit saved');
    // });
    // habitList.$save(habit);
  };

  $scope.updateHabit = function(habit){
    console.log(habit);
    habitList.$save(habit).then(function(ref){
      $scope.habit = null;
    });
    habitList.$save(habit);
  };
  $scope.deleteHabit = function(habit){
    habitList.$remove(habit);
  };
});
