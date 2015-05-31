angular.module("tinyHabits")
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url:'/', templateUrl: '/views/home/home.html', controller: 'homeCtrl'})
  .state('list', {url:'/list', templateUrl: '/views/list/list.html', controller:'listCtrl'});

});
