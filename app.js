var flashApp = angular.module('flash', []);
flashApp.controller('CardController',function ($scope) {

  var allCards = [
    { front:"1 Red and invisible?",
      back:"2 No tomatoes"
    },
    { front:"3 beep",
      back:"4 boop"
    },
    { front:"5 full frontal",
      back:"6 back end"
    }
  ];

  function init() { 
    $scope.cards = [].concat(allCards);
    $scope.front = true;
    $scope.current = 0;
  }

  init();

  $scope.reset = init;

  $scope.next = function() {
    var step = +(!$scope.front); //change cards if on back
    $scope.move(step);
  };

  $scope.back = function() {
    var step = -($scope.front); //change cards if on front
    $scope.move(step);
  };

  $scope.move = function(step) { // step is 0,1,-1
    var numCards = $scope.cards.length;
    $scope.current = ($scope.current + step + numCards) % numCards;
    $scope.front = !$scope.front;
  };

  $scope.gotIt = function() { 
    $scope.front = true;
    $scope.cards.splice($scope.current,1);
    $scope.current = $scope.current % $scope.cards.length;
  };

 });
