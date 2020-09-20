<template lang="html">
  <div>
    <UnoButton></UnoButton>
    <p v-for="play in plays">{{play.name}}</p>
    <button type="button" v-on:click="handleClick">Play</button>
  </div>
</template>

<script>
import PlayService from '../services/PlayService.js'
import UnoButton from './UnoButton.vue'
import Game from '../models/Game.js'

export default {
  components: {
    UnoButton
  },
  data(){
    return {
      plays: [],
      player: {
        cards: [],
      },
      computer: {
        cards: [],
      }
    }
  },
  mounted() {
    PlayService.getPlay().then(json => this.plays = json);
  },
  methods: {
    handleClick() {
      Game.start();
    }
  },

}
</script>

<style lang="css" scoped>
</style>
