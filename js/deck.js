var deckModule = angular.module("flash.deck", []);

deckModule.controller('DeckController', function($scope) {

  var allDecks = [
    {
      name: "deck 0",
      cards: [
      { front: "deck 0, card 0",
          back: "back 0"
        },
        { front:"deck 0, card 1",
          back: "back 1"
        }
        ]
    },
        {
      name: "deck 1",
      cards: [
      { front: "deck 1, card 0",
          back: "back 0"
        },
        { front:"deck 1, card 1",
          back: "back 1"
        }
        ]
    }
];

  var studyDeck;

  $scope.decks = allDecks;

  $scope.refreshStudyDeck = function (deckNum) {
    studyDeck = [].concat(allDecks[deckNum].cards);
    return studyDeck;
  };

  $scope.addCard = function (front,back,deck) {
    var newCard = {front: front, back: back};
    allDecks[deck].cards.push(newCard);
    studyDeck.push(newCard);
  };

});
