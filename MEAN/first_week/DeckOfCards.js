function DeckConstructor(){
    // create the objects
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var values = ['Ace', '2', '3', '4', '5','6','7','8','9','10','Jack', 'Queen', 'King'];
    // var deck = [CardObj, CardObj]
    var deck = [];

    this.show = function(){
        console.log(deck);
        console.log('Length: ', deck.length);
    }

    var generateDeck = function(){
        deck = [];
        // console.log(deck);
        for(var i = 0; i < suits.length; i++){
            for(var j=0; j < values.length; j++){
                // var card = {
                //     suit: suits[i];
                //     value: values[j];
                // };

                var card = new CardConstructor(suits[i], values[i]);
                deck.push(card);
            }
        }
    }
    generateDeck();

    this.shuffle = function(){
        var numOfShuffles = Math.floor(Math.random() * 100 + 50);
        for(var i = 0; i < numOfShuffles; i++){
            var randInt1 = Math.floor(Math.random() * deck.length);
            var randInt2 = Math.floor(Math.random() * deck.length);
            var temp = deck[randInt1];
            deck[randInt1] = deck[randInt2];
            deck[randInt2] = temp;
        }
        return this;
    }
    this.reset = generateDeck;
    this.getDeck = function(){
        return deck;
    }
}

DeckConstructor.prototype.deal = function(){
    return this.getDeck().pop();
}

function CardConstructor(suit, value){
    this.suit = suit;
    this.value = value;
}

var myDeck = new DeckConstructor();
// Show all
// myDeck.show();
// Show shuffle
// myDeck.shuffle().show()
// reset shuffle
// myDeck.shuffle().reset();
// myDeck.show();
myDeck.shuffle();
// Pop a card from shuffle
console.log(myDeck.deal());
myDeck.show();
