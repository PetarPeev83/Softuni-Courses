function createCard(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        "S": '\u2660',
        "H": "\u2665",
        "D": '\u2666',
        "C": "\u2663"
    }
    if (!validFaces.includes(face)) {
        throw new Error('Invalid face: ' + face);
    }
    if (!Object.keys(validSuits).includes(suit)){
        throw new Error('Invalid suit: ' + suit);
    }
    return {
        face,
        suit: validSuits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}
createCard('A', 'S');
createCard('10', 'H');
createCard('1', 'C');