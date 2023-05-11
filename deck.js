//set value to cards individualy in deck
const suit = ["spades", "diamonds", "clubs", "hearts"];
const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deckOfCard = [];
function buildDeckOfCards() { //creating out deck in an array
    for (let i = 0; i < rank.length; i++) {
        for (let j = 0; j < suit.length; j++) {
            //let card = { rank: rank[i], suit: suit[j] }; // coming out as a [{},{}] array of objects
            let card = [rank[i], suit[j]];
            deckOfCard.push(card);
        }
    } //console.log(deckOfCard);
    return deckOfCard;
}
buildDeckOfCards();

let shuffledDeck = [];
function dealHand() {
    for (let i = 0; i < deckOfCard.length; i++) {
        let thing = Math.ceil(Math.random(deckOfCard) * 52)
        if (typeof shuffledDeck !== thing) { shuffledDeck.push(thing) }
        // Math.ceil(Math.random(deckOfCard.length) * 52);
        // shuffledDeck.push(Math.ceil(Math.random(deckOfCard) * 52));
        // if 
    }
    //console.log(instentOfCard);
    console.log(shuffledDeck);
    return shuffledDeck;
}
dealHand();


class Card {
    constructor(rank, suit) {
        this.rank = rank; // 2-10, jack, queen, king, ace
        this.suit = suit; // heart, diamond, spade, club
    }

    render() {
        const card = document.createElement("div");
        card.contentText = `${this.rank}${this.suit}`;
        return card;
    }
}