var flashApp = angular.module('flash', [
  "ngRoute",
  "flash.cards", 
  "flash.deck", 
  "flash.study" 
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: 'partials/decks.html',
    })
  .when("/study/:index", {
    templateUrl: 'partials/study.html',
    controller: 'StudyController'
    })
  .when("/add/:index", {
    templateUrl: 'partials/cards.html',
    controller: 'CardsController'
    });
}]);