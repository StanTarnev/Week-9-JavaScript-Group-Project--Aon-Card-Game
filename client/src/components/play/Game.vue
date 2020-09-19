<template lang="html">
  <div class="table">
    <div class="help-side">
      <button title="Would you like to cheat?" class="help-button" @click="help = !help">?</button><br>
      <transition name="cheat">
        <div v-if="help" class="help-list">
          <p>If you need a little help:</p>
          <NumbersHelp v-for="(number, index) in numbers" :item="number" :key="index"/>
        </div>
      </transition>
    </div>
    <div class="info-side">
      <button title="Do you need a reminder about the rules?" class="info-button" @click="info = !info">!</button><br>
      <transition name="tips">
        <div v-if="info" class="info-list">
          <p>Useful tips for the game:</p>
          <p>You can put down a card if its number/color matches the number/color of the card at the top of the Discard Pile.</p>
          <p>If you can't put down anything, draw a card from the Draw Pile.</p>
          <p>If you have only one card left, don't forget to push the "AON" button or you will suffer!</p>
        </div>
      </transition>
    </div>
    <div class="play-field">
    <AIPlayer v-bind:cards="ai_player.cards"></AIPlayer>
    <Computer v-bind:draw_pile="draw_pile" v-bind:discard_pile="discard_pile"></Computer>
    <Player v-bind:cards="player.cards" ></Player>
  </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import CardsService from '@/services/CardsService.js';
import GameStatsService from '@/services/GameStatsService.js';
import AIPlayer from '@/components/play/AIPlayer.vue';
import Computer from '@/components/play/Computer.vue';
import Player from '@/components/play/Player.vue';
import GameHelper from '@/helpers/Game.js';
import NumbersHelp from '@/components/play/NumbersHelp.vue'
import QuizQuestionsService from '@/services/QuizQuestionsService.js'



export default {
  data() {
    return {
      help: false,
      info: false,
      setup: {
        startingCards: 7,
        cardPickAnimationDelay: 300, // milliseconds
        aonPenaltyCards: 2,
        updateTime: 300, // milliseconds
        aiThinkingTime: 1000, // milliseconds
        aonClickTime: 4000, // milliseconds
      },
      cards: [],
      player: {
        cards: [],
      },
      ai_player: {
        cards: [],
      },
      draw_pile: [],
      discard_pile: [],
      state: {
        turn: 'player', // player, ai
        action: '', // discard, draw
        aon: false,
        gameEnded: false,
        gameWinner: '',
      },
      numbers: []
    }
  },
  mounted() {
    // Set up the event buses
    eventBus.$on('player-card-clicked', data => this.playerCardClickedEvent(data));
    eventBus.$on('draw-pile-clicked', data => this.drawPileClickedEvent(data));
    eventBus.$on('aon-button-clicked', data => this.aonButtonClickedEvent());

    // Get all the cards and init the game.
    CardsService.get().then(json => {
      this.cards = json;
      this.init();
    });
    QuizQuestionsService.get()
    .then ((json) => {
      this.numbers = json;
    })
  },
  methods: {

    init() { // Run only once when the game starts.
      // Shuffle the cards
      this.cards = GameHelper.shuffleCards(this.cards);
      // Allocate the cards
      this.allocateCards(this.cards);
      // Kick start the machine
      this.update();
    },

    update() {
      GameHelper.delay(this.getUpdateTime())
      .then(() => console.log('<--------'))
      // Handle Aon click
      .then(() => {
        // console.log('Handle Aon click');
        if (this.shouldAonBeTriggered()) {
          return GameHelper.delay(this.getAonClickTime()).then(() => {
            if (!this.isAonExpectationFulfilled()) {
              this.aonPenalise();
            }
            this.resetAonExpectation();
          });
        }
      })
      // Handle turns
      .then(() => {
        if (this.getTurn() === 'player') {
          this.updatePlayerGameState();
        } else if (this.getTurn() === 'ai') {
          return GameHelper.delay(this.getAIThinkingTime()).then(() => {
            this.updateAIGameState();
          });
        }
      })
      .then(() => {
        return GameHelper.delay(this.getCardPickAnimationDelay());
      })
      // Handle game end
      .then(() => {
        this.checkForGameEnd();
        if (this.getGameEnd() === true) {
          alert(`${this.getWinner()} has won the game!`);
        } else {
          this.update();
        }
      })
      .then(() => console.log('<--------'));
    },

    updatePlayerGameState() {
      // Update the game state.
      if (this.state.turn === 'player') {
        // Draw card or use one?
        console.log("player turn");
        // Draw or pick?
        if (this.shouldDiscard(this.player.cards)) {
          console.log("player should discard");
          this.state.action = 'discard';
        } else {
          console.log("player should draw");
          this.state.action = 'draw';
        }
      }
    },

    updateAIGameState() {
      if (this.state.turn === 'ai') {
        console.log("ai turn");
        // Draw or pick?
        if (this.shouldDiscard(this.ai_player.cards)) {
          console.log("ai should discard");
          this.state.action = 'discard';
          this.aiCardPickedEvent(this.aiPickCard());
        } else {
          console.log("ai should draw");
          this.state.action = 'draw';
          this.aiDrawCard();
        }
      }
    },

    getTurn() {
      return this.state.turn;
    },

    getAction() {
      return this.state.action;
    },

    getGameEnd() {
      return this.state.gameEnded;
    },

    getUpdateTime() {
      return this.setup.updateTime;
    },

    getAIThinkingTime() {
      return this.setup.aiThinkingTime;
    },

    getAonClickTime() {
      return this.setup.aonClickTime;
    },

    getWinner() {
      return this.state.gameWinner;
    },

    getCardPickAnimationDelay() {
      return this.setup.cardPickAnimationDelay;
    },

    shouldAonBeTriggered() {
      if (this.player.cards.length === 1 && this.state.aon === false) {
        console.log("aon triggered");
        return true;
      } else {
        return false;
      }
    },

    startAonExpectation() {
      // this.state.action = 'expecting-aon';
      this.state.aon = false;
    },

    aonButtonClickedEvent() {
      // this.state.action = 'aon-fulfilled';
      this.state.aon = true;
    },

    isAonExpectationFulfilled() {
      if (this.state.aon === true) {
        console.log('aon expectation fulfilled');
        return true;
      }
      console.log('aon expectation not fulfilled');
      return false;
    },

    aonPenalise() {
      [...Array(this.setup.aonPenaltyCards)].map(() => {
        if (this.discard_pile.length >= 1) {
          const card = this.draw_pile.pop()
          this.player.cards.push(card);
        }
      });
    },

    resetAonExpectation() {
      this.state.turn = 'ai';
      this.state.action = '';
    },

    checkForGameEnd() {
      // Check the win state
      if (this.player.cards.length <= 0) {
        this.state.gameEnded = true;
        this.state.gameWinner = 'player';
      } else if (this.ai_player.cards.length <= 0) {
        this.state.gameEnded = true;
        this.state.gameWinner = 'ai';
      } else if (this.draw_pile.length <= 0) {
        if (this.player.cards.length < this.ai_player.cards.length) {
          this.state.gameEnded = true;
          this.state.gameWinner = 'player';
        } else if (this.player.cards.length > this.ai_player.cards.length) {
          this.state.gameEnded = true;
          this.state.gameWinner = 'ai';
        } else {
          this.state.gameEnded = true;
          this.state.gameWinner = 'both players';
        }
      }
    },

    addPointToPlayer() {
      // TODO: finish this function
      GameStatsService.get().then((data) => {
        data.player_wins += 1;
        return GameStatsService.put(data);
      }).then(() => {
        this.redirectToGameStatsPage();
      });
    },

    addPointToAI() {
      // TODO
    },

    addPointToDraw() {
      // TODO
    },

    redirectToGameStatsPage() {
      this.$router.push('/game-stats');
    },

    aiPickCard() {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      const result = this.ai_player.cards.findIndex(card => {
        return card.colour === discardCard.colour || card.number === discardCard.number;
      });
      return this.ai_player.cards[result];
    },

    aiDrawCard() {
      const drawCard = this.draw_pile.pop();
      this.ai_player.cards.push(drawCard);
      this.state.turn = 'player';
      this.state.action = '';
      // Emit the event
      eventBus.$emit('ai-draw-picked', drawCard);
    },

    shouldDiscard(yourCards) {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      const result = yourCards.findIndex(card => {
        return card.colour === discardCard.colour || card.number === discardCard.number;
      });
      return result != -1 ? true : false;
    },

    canDiscard(yourCard) {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      return yourCard.colour === discardCard.colour || yourCard.number === discardCard.number;
    },

    allocateCards(cards) {
      // Split the cards
      const playerCards = cards.splice(0, this.setup.startingCards);
      const aiCards = cards.splice(0, this.setup.startingCards);
      const discardPile = cards.splice(0, 1);
      const drawPile = cards;

      // Assign appropriate cards to appropriate entities
      this.player.cards = playerCards;
      this.ai_player.cards = aiCards;
      this.draw_pile = drawPile;
      this.discard_pile = discardPile;
    },

    playerCardClickedEvent(card) {
      // Allowed action?
      if (this.state.turn === 'player' && this.state.action === 'discard') {
        // Card matches the pile colour?
        if (this.canDiscard(card)) {
          // Add the clicked card to the discard pile.
          this.discard_pile.push(card);
          // Remove from the player's cards.
          eventBus.$emit('player-card-picked', card);
          GameHelper.delay(400).then(() => {
            this.player.cards.splice(GameHelper.getCardIndexInCards(card, this.player.cards), 1);

          });
          // Update the state
          if (this.shouldAonBeTriggered()) {
            this.state.turn = 'player';
            this.startAonExpectation();
          } else {
            this.state.turn = 'ai';
            this.state.action = '';
          }
        }
      }
    },

    aiCardPickedEvent(card) {
      if (this.state.turn === 'ai' && this.state.action === 'discard') {
        // Card matches the pile colour?
        if (this.canDiscard(card)) {
          // Add the clicked card to the discard pile.
          this.discard_pile.push(card);
          // Remove from the player's cards.
          GameHelper.delay(400).then(() => {
            this.ai_player.cards.splice(GameHelper.getCardIndexInCards(card, this.ai_player.cards), 1);
          });
          // Update the state
          this.state.turn = 'player';
          // Emit the event
          eventBus.$emit('ai-card-picked', card);
        }
      }
    },

    drawPileClickedEvent(card) {
      // Allowed action?
      if (this.state.turn === 'player' && this.state.action === 'draw') {
        // Do the action.
        this.player.cards.push(card);
        // Remove from the draw pile.
        this.draw_pile.pop();
        // Update the state.
        this.state.turn = 'ai';
        this.state.action = '';
        this.state.aon = false;
        // Emit the event
        eventBus.$emit('player-draw-picked', card);
      }
    },
  },
  components: {
    AIPlayer, Computer, Player, NumbersHelp
  },
}
</script>

<style lang="css" scoped>

/* table */

  .play-field {
    position: relative;
    left: 18%;
    width: 780px;
    transform: scale(.95);
  }

  .table {
    background: url('../../../public/table.png');
    background-repeat: repeat;
    background-size: cover;
    background-size: 100%;
    background-color: ivory;
    width: 100%;
    height: auto;
    box-shadow: 10px 10px 3px rgba(0, 0, 0, 0.7);
  }

/* Help-side: */

  .help-side {
    position: absolute;
    right: 130px;
    top: 250px;
    text-align: center;
  }

  .help-button {
    font-family: inherit;
    position: absolute;
    right: 86px;
    top: -50px;
    transition: 0.1s ease-in-out;
    padding: 10px;
    font-size: 20px;
    border-radius: 12px;
    background-color: lightgrey;
    box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.8);
  }

  .help-button:focus {
    outline: 0;
  }

  .help-button:active {
    box-shadow: 1px 1px 0.5px black;
    transform: translateY(4px);
  }

  .help-list {
    background-color: ghostwhite;
    padding: 5px;
    border: 2px solid #264726;
    margin: 10px;
    font-size: 18px;
  }

  .cheat-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  .cheat-enter-active {
    transition: all 1s;
  }

  .cheat-leave-to {
    transition: all 1s;
    transform: translateY(30px);
    opacity: 0;
  }

/* Info-side: */

.info-side {
  position: absolute;
  left: 140px;
  top: 250px;
  text-align: center;
  width: 190px;
}

.info-button {
  font-family: inherit;
  position: absolute;
  left: 80px;
  top: -51px;
  transition: 0.1s ease-in-out;
  padding: 10px;
  font-size: 20px;
  border-radius: 12px;
  background-color: lightgrey;
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.8);
}

.info-button:focus {
  outline: 0;
}

.info-button:active {
  box-shadow: 1px 1px 0.5px black;
  transform: translateY(4px);
}

.info-list {
  background-color: ghostwhite;
  padding: 5px;
  border: 2px solid #264726;
  margin: 5px;
  font-size: 18px;
}

.tips-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.tips-enter-active {
  transition: all 1s;
}

.tips-leave-to {
  transition: all 1s;
  transform: translateY(30px);
  opacity: 0;
}
</style>
