<template lang="html">
  <button class="aon-button" type="button" v-on:click="handleClick">AON!</button>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  methods: {
    handleClick() {
      eventBus.$emit('aon-button-clicked', 'Aon!');
    },
  },
}
</script>

<style lang="css" scoped>
.aon-button {
  font-family: inherit;
  position: relative;
  right: -7%;
  font-weight: bolder;
  top: -95px;
  transition: 0.1s ease-in-out;
  padding: 10px;
  font-size: 25px;
  border-radius: 12px;
  background-color: lightgrey;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.aon-button:focus {
  outline: 0;
}

.aon-button:active {
  box-shadow: 2px 2px 0.5px black;
  transform: translateY(4px);
}

</style>
