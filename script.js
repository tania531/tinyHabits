// Code goes here

var app = angular.module("tinyHabits", []);
app.controller('habitCtrl',function($scope){
  $scope.habits = [
      {name:"walking", tinyAction:"walk around windmill", trigger:"first am downstairs", compliment:"awesome!", date:new Date()},
      {name:"organizing", tinyAction:"close or move one file", trigger:"open/navigate to new file", compliment:"you rock!", date:new Date() },
      {name:"programming", tinyAction:"look up one new concept / how to do", trigger:"after checking email/pseudocode", compliment:"great job!", date:new Date()},
      {name:"green smoothies", tinyAction:"request grocery trip", trigger:" dinner to trash", compliment:"Good for you!", date:new Date()},
      {name:"visualize desired end", tinyAction:"2 minute focus timed", trigger:"after 20 min medit am", compliment:"yay!", date:new Date()}

    ];
  $scope.addHabit = function(habit){
    $scope.habits.push({
      name: $scope.habit.name,
      tinyAction: $scope.habit.tinyAction,
      trigger: $scope.habit.trigger,
      compliment: $scope.habit.compliment,
      date: $scope.habit.date,
      completed: $scope.habit.completed
    });
    $scope.habit = {};
  };
});

// app.controller('mathCtrl', function($scope){
//   $scope.square = function(value){
//     return value * value;
//   };
// });
//
// app.controller('simpleCtrl', function($scope){
//   $scope.collection = ['exercise', 'diet', 'programming'];
// });
