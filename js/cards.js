var cardModule = angular.module("flash.cards", []);

 cardModule.controller('CardsController',['$scope', '$routeParams', function ($scope, $routeParams) {
   $scope.addCard = function() {
     $scope.$parent.addCard($scope.front, $scope.back, $routeParams.index);
     $scope.front= '';
     $scope.back= '';
    };
}]);


