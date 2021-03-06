export default {

  // Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffleCards(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
  },

  getCardIndexInCards(card, cards) {
    return cards.findIndex(c => c._id === card._id);
  },

  // Source: https://blog.praveen.science/right-way-of-delaying-execution-synchronously-in-javascript-without-using-loops-or-timeouts/
  delay(milliseconds) {
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, milliseconds);
    });
  }

}
