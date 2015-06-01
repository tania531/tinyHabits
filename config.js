angular.module("tinyHabits")
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url:'/', templateUrl: '/views/home/home.html', controller: 'homeCtrl'})
  .state('habit', {url:'/habit', templateUrl: '/views/habit/habit.html', controller:'habitCtrl'})
  .state('list', {url:'/list', templateUrl: '/views/list/list.html', controller:'listCtrl'})
  .state('report', {url:'/report', templateUrl: '/views/list/report.html', controller:'reportCtrl'});

});
