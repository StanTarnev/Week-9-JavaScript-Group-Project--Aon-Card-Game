<template lang="html">
  <div class="learn-to-play">
    <section class="section1">
      <h1>Cards:</h1>
      AON is played using a deck of 40 cards in four-color suits, numbered from 1 through 10: 10 blue, 10 green, 10 red and 10 yellow.
    </section>
    <section class="section2">
      <h1>Object of the game:</h1>
      The object of AON is playing all the cards in your hand. When only one card is remaining, the cardholder must shout "Aon!" alerting others that he or she is down to the last card in his or her hand.
    </section>
    <section class="section3">
      <h1>How to start:</h1>
      Each player is dealt seven cards at the game's start, with the remaining ones placed facedown to form a "draw" pile. The top card of the draw pile is turned over to begin a "discard" pile.
    </section>
    <section class="section4">
      <h1>How to play:</h1>
      The first player has to match the card in the discard pile either by number, color or word. For example, if the card played is a red 7, the next player must throw down a red card or a 7 of any color. If the player doesn't have a playable card, he or she must pick a card from the draw pile.
    </section>
    <section class="section5">
      <h1>How to win:</h1>
      When a player has one card left, he or she must yell "Aon!". If the player forgets, he or she has to pick four cards from the draw pile. Once a player has no cards left, the hand is over and she or he wins the game.
    </section>

    <img class="piles-img" src="../../public/piles.png" alt="">

    <div class="scene1">
      <div class="cards1">
        <div class="card1 front-face1">
          <img src="http://localhost:3000/images/blue1.png" alt="front">
        </div>
        <div class="card1 back-face1">
          <img src="http://localhost:3000/images/back.png" alt="back">
        </div>
      </div>
    </div>

    <div class="scene2">
      <div class="cards2">
        <div class="card2 front-face2">
          <img src="http://localhost:3000/images/green1.png" alt="front">
        </div>
        <div class="card2 back-face2">
          <img src="http://localhost:3000/images/back.png" alt="back">
        </div>
      </div>
    </div>

    <div class="scene3">
      <div class="cards3">
        <div class="card3 front-face3">
          <img src="http://localhost:3000/images/red1.png" alt="front">
        </div>
        <div class="card3 back-face3">
          <img src="http://localhost:3000/images/back.png" alt="back">
        </div>
      </div>
    </div>

    <div class="scene4">
      <div class="cards4">
        <div class="card4 front-face4">
          <img src="http://localhost:3000/images/yellow1.png" alt="front">
        </div>
        <div class="card4 back-face4">
          <img src="http://localhost:3000/images/back.png" alt="back">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

/* blue card */
.scene1 {
  position: absolute;
  width: 120px;
  height: auto;
  top: 20%;
  left: 32%;
  perspective: 1000px;
}

.cards1 {
  position: relative;
  width: 120px;
  height: auto;
  transition: all 1s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.card1 {
  backface-visibility: hidden;
  position: absolute;
}

.back-face1 {
  transform: rotateY(180deg);
}

.cards1:hover {
  transform: rotateY(180deg);
}

/* green card */
.scene2 {
  position: absolute;
  width: 120px;
  height: auto;
  top: 46%;
  left: 22%;
  perspective: 1000px;
}

.cards2 {
  position: relative;
  width: 120px;
  height: auto;
  transition: all 1s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.card2 {
  backface-visibility: hidden;
  position: absolute;
}

.back-face2 {
  transform: rotateY(180deg);
}

.cards2:hover {
  transform: rotateY(180deg);
}

/* red card */
.scene3 {
  position: absolute;
  width: 120px;
  height: auto;
  top: 20%;
  left: 22%;
  perspective: 1000px;
}

.cards3 {
  position: relative;
  width: 120px;
  height: auto;
  transition: all 1s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.card3 {
  backface-visibility: hidden;
  position: absolute;
}

.back-face3 {
  transform: rotateY(180deg);
}

.cards3:hover {
  transform: rotateY(180deg);
}

/* yellow card */
.scene4 {
  position: absolute;
  width: 120px;
  height: auto;
  top: 46%;
  left: 32%;
  perspective: 1000px;
}

.cards4 {
  position: relative;
  width: 120px;
  height: auto;
  transition: all 1s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.card4 {
  backface-visibility: hidden;
  position: absolute;
}

.back-face4 {
  transform: rotateY(180deg);
}

.cards4:hover {
  transform: rotateY(180deg);
}

img {
  width: 120px;
  height: auto;
  box-shadow: 7px 7px 5px grey;
}

.section1 {
  font-size: 21px;
  padding: 15px;
  position: absolute;
  width: 400px;
  text-align: justify;
  left: 49%;
  top: 13%;
  margin-top: 5px;
}

.section2 {
  font-size: 21px;
  padding: 20px;
  position: absolute;
  width: 400px;
  text-align: justify;
  left: 49%;
  top: 35%;
  margin-top: 20px;
}

.section3 {
  font-size: 21px;
  padding: 20px;
  position: absolute;
  width: 400px;
  text-align: justify;
  left: 20%;
  top: 70%;
  padding-top: 30px;
}

.section4 {
  font-size: 21px;
  padding: 20px;
  position: absolute;
  width: 400px;
  text-align: justify;
  left: 20%;
  top: 98%;
}

.section5 {
  font-size: 21px;
  padding: 20px;
  position: absolute;
  width: 830px;
  text-align: justify;
  left: 20%;
  top: 132%;
}

.learn-to-play {
  font-size: 18px;
}

.piles-img {
  position: absolute;
  top: 86%;
  left: 55.5%;
  width: 330px;
  height: auto;
  box-shadow: 0 0 0;
}
</style>
