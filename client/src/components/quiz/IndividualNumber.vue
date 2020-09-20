<template lang="html">
  <div class="numbers">
    <span class="icon">{{this.correctSymbol}}</span>
    <span>{{this.questionsData.question}}</span>
    <input class="input" type="text" size="10" v-model:change="input" v-on:keyup.enter="handleCheckClick">
    <button type="button" v-on:click="handleCheckClick">Check</button>
    <audio v-if="isCorrect" autoplay>
      <source :src="this.questionsData.soundbiteUrl" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      correctSymbol: 'ааa',
      isCorrect: false
    }
  },
  props: ['questionsData'],
  methods: {
    correctInputSound() {
      const correctInputAudio = new Audio(this.questionsData.soundbiteUrl);
      correctInputAudio.play();
    },
    wrongInputSound() {
      const wrongInputAudio = new Audio('http://localhost:3000/sounds/fail.mp3');
      wrongInputAudio.play();
    },
    handleCheckClick() {
      if (this.questionsData.answers.includes(this.input.toLowerCase())) {
        this.correctSymbol = '✔️';
        this.isCorrect = true;
        this.correctInputSound();
      } else {
        this.correctSymbol =  '❌'
        this.isCorrect = false;
        this.wrongInputSound();
      }
    }
  }
}
</script>

<style lang="css" scoped>
.input {
  font-family: inherit;
  font-size: 15px;
}

.numbers {
  margin: 9px;
}

.icon {
  position: relative;
  font-size: 10px;
  color: whitesmoke;
}

button {
  font-family: inherit;
  transition: 0.1s ease-in-out;
  font-size: 13px;
  border-radius: 20px;
  background-color: ghostwhite;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
}

button:focus {
  outline: 0;
}

button:active {
  box-shadow: 1px 1px 0.5px black;
  transform: translateY(4px);
}
</style>
