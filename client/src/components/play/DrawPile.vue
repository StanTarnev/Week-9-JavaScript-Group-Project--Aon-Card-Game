<template lang="html">
  <div v-on:click="handleClick" class="draw-pile">
    <p>Draw Pile</p>
    <img :src="lastCard.back_url" class="draw-card">
    <img :src="lastCard.back_url" :class="{'slide-top': animateTop, 'slide-bottom': animateBottom}" class="animated-card draw-card">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  data() {
    return {
      animateTop: false,
      animateBottom: false,
    }
  },
  props: ['cards'],
  computed: {
    lastCard() {
      return this.cards[this.cards.length - 1];
    },
  },
  methods: {
    handleClick() {
      eventBus.$emit('draw-pile-clicked', this.lastCard);
    },
    handlePlayerDrawEvent(data) {
      console.log("Player draw animation");
      this.animateBottom = true;
      setTimeout(() => {
        this.animateBottom = false;
      }, 400);
    },
    handleAIDrawEvent(data) {
      console.log("AI draw animation");
      this.animateTop = true;
      setTimeout(() => {
        this.animateTop = false;
      }, 400);
    },
  },
  mounted() {
    eventBus.$on('player-draw-picked', data => this.handlePlayerDrawEvent(data));
    eventBus.$on('ai-draw-picked', data => this.handleAIDrawEvent(data));
  },
}
</script>

<style lang="css" scoped>
div:hover {
  cursor: pointer;
}
img {
  width: 100px;
}
.animated-card {
  position: absolute;
  margin-left: -49%;
}
.slide-bottom {
	-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.4s, opacity 0.4s linear;
}
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
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
.draw-pile:hover {
  cursor: pointer;
}
.draw-card {
  position: relative;
  /* left: 12%; */
  width: 150px;
  height: auto;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.6);
}

p {
  font-size: 20px;
  font-weight: bolder;
  color: white;
  position: relative;
  left: 20px;
}
</style>
