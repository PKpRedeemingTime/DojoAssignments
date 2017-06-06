function Deck() {
    this.buildDeck();
}
function Card(suit, value) {
    this.suit = suit;
    this.value = value;
}
function Player(name) {
    this.name = name;
    this.hand = [];
}
Deck.prototype.buildDeck = function() {
    this.myDeck = [];
    var suits = ["hearts","spades","diamonds","clubs"];
    var values = ["ace","king","queen","jack","10","9","8","7","6","5","4","3","2"];
    for(var i = 0; i < suits.length; i++) {
        for(var x = 0; x < values.length; x++) {
            this.myDeck.push(new Card(suits[i],values[x]));
        }
    }
    return this;
}
Deck.prototype.shuffle = function() {
    var m = this.myDeck.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.myDeck[m];
        this.myDeck[m] = this.myDeck[i];
        this.myDeck[i] = t;
    }
    return this;
}
Deck.prototype.deal = function() {
    if(this.myDeck.length > 0) {
        return this.myDeck.pop();
    }
}
Deck.prototype.reset = function() {
    this.buildDeck().shuffle();
    return this;
}
Player.prototype.takeCard = function() {
    this.hand.push(deck.deal());
    return this;
}
Player.prototype.discard = function(whichCard) {
    if (this.hand.length > whichCard) {
        this.hand.splice(whichCard, 1);
    }
    return this;
}
var deck = new Deck();
deck.shuffle();
var patrick = new Player("Patrick");
patrick.takeCard().takeCard().takeCard().takeCard().takeCard();
console.log(patrick.hand);
patrick.discard(2);
console.log(patrick.hand);
deck.reset();
console.log(deck);