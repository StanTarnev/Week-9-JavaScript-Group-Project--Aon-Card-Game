<template lang="html">
  <div>
    <p>Opponent's Cards</p>
    <AICards v-bind:cards="cards"></AICards>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import AICards from '@/components/play/AICards.vue';

export default {
  components: {
    AICards
  },
  props: ['cards'],
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
