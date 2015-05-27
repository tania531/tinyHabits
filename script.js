// Code goes here

var app = angular.module("tinyHabits", ['firebase']);
app.controller('habitCtrl',function($scope, $firebaseObject, $firebaseArray){
  var ref = new Firebase("https://tinyhabits.firebaseio.com/");
  var fbObj = $firebaseObject(ref);
  // var myDataRef = new Firebase("https://tinyhabits.firebaseio.com/habits");
  // myDataRef.push({name: name, tinyAction: tinyAction, trigger: trigger, compliment:compliment, date:date});
  //
  // myDataRef.on('child_added', function(snapshot) {
  //       //We'll fill this in later.
  // });

  var habitList = $firebaseArray(new Firebase("https://tinyhabits.firebaseio.com/"));

  //  // remove an item
  //  list.$remove(2).then(...);
  //
  //  // make the list available in the DOM
  $scope.habitList = habitList;

  console.log("$scope.habitList: ", $scope.habitList);


  $scope.habits = [
    {name:"walking", tinyAction:"walk around windmill", trigger:"first am downstairs", compliment:"awesome!", date:new Date(), completed:false},
    {name:"organizing", tinyAction:"close or move one file", trigger:"open/navigate to new file", compliment:"you rock!", date:new Date(), completed:false },
    {name:"programming", tinyAction:"look up one new concept / how to do", trigger:"after checking email/pseudocode", compliment:"great job!", date:new Date(), completed:false},
    {name:"green smoothies", tinyAction:"request grocery trip", trigger:" dinner to trash", compliment:"Good for you!", date:new Date(), completed:false},
    {name:"visualize desired end", tinyAction:"2 minute focus timed", trigger:"after 20 min medit am", compliment:"yay!", date:new Date(), completed:false}

  ];

  $scope.addHabit = function(habit){
    habitList.$add({
      name: $scope.habit.name,
      tinyAction: $scope.habit.tinyAction,
      trigger: $scope.habit.trigger,
      compliment: $scope.habit.compliment,
      date: new Date(),
      completed: false
    });

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
