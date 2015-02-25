var hackNewsClone = angular.module('hackNewsClone', ['ui.router']);

hackNewsClone.config(function($stateProvider){
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });
});
