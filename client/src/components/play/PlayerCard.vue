<template lang="html">
  <div v-on:click="handleClick" :class="{'slide-top': animate}" class="player-cards">
    <img class="player-card" :src="card.front_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  data() {
    return {
      animate: false,
    }
  },
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('player-card-clicked', this.card);
    },
    handlePickAnimation(data) {
      if (data._id === this.card._id) {
        console.log("Do player card pick animation");
        this.animate = true;
      }
    },
  },
  mounted() {
    eventBus.$on('player-card-picked', data => this.handlePickAnimation(data));
  },
}
</script>

<style lang="css" scoped>
div {
  display: inline-block;
}
div:hover {
  cursor: pointer;
}
img {
  width: 100px;
}

.slide-top {
	-webkit-animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.4s, opacity 0.4s linear;
}
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
.player-cards {
  display: inline-block;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
}

.player-card {
  width: 90px;
  height: auto;
  cursor: pointer;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.6);
  margin: 5px;
  transition: all .3s ease-in-out;
}

.player-card:hover {
  overflow: hidden;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
  margin-left: 5px;
  margin-right: 5px;
}
</style>
