<template lang="html">
  <div>
    <p>Your Cards</p>
    <PlayerCards v-bind:cards="cards"></PlayerCards>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import PlayerCards from '@/components/play/PlayerCards.vue';

export default {
  props: ['cards'],
  components: {
    PlayerCards
  },
}
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
  font-weight: bolder;
  color: white;
  position: relative;
}
</style>
