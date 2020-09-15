<template lang="html">
  <div class="info">
    <section class="header">
      <h1>Please, let me introduce you our developing team:</h1>
      <ul class="header-list">
        <div class="auri">
          <li @click="openModal" v-if="!showModal">Aurimas Drungilas</li>
        </div>
        <div class="stan">
          <li @click="openModal" v-if="!showModal">Stan Tarnev</li>
      </div>
      <div class="adam">
        <li @click="openModal" v-if="!showModal">Adam D. Hidvegi</li>
      </div>
    </ul>
  </section>
  <section class="text">
    <h1>About the project:</h1>
    <p>Our main goal was to create a simple application which you can use to learn a few things about a new language while having fun. It includes a quick quiz at the very beginning to make prepare you for playing our game. Right after the quiz, you can get information about the rules of the game. Don't worry, they are really simple!</p>
    <p>We highly recommend that you go through the navigation bar from left to right to get all the information you need to play an extremely enjoyable game.</p>
    <p>Of course, you can skip a few steps at any time, and on the Game page you will find reminders about the rules and a little help with the language if you don't exactly know what to do.</p>
    <p style="font-size: 27px; font-weight: bolder;">Thank you very much for using our application and please have a good time!</p>
  </section>

  <transition name="test">
  <AppModal v-if="showModal" :showModal=showModal @clicked="onChildClick" class="appmodal">
      <div slot="header">
        <h1>Our team!</h1>
      </div>
      <div slot="body">
        <img class="team-img" src="../../public/team.jpg" alt="team image">
      </div>
    </AppModal>
</transition>

</div>
</div>
</template>

<script>
import AppModal from './Modal.vue'
export default {
  components: {
    AppModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    onChildClick () {
      this.showModal = false;
    }
  },
}
</script>

<style lang="css" scoped>

.test-enter-active, .test-leave-active {
  transition-property: opacity;
  transition-duration: 0.8s;
}

.test-enter-active {
  transition-delay: 0.01s;
}

.test-enter, .test-leave-active {
  opacity: 0;
}


  .team-img {
    width: 500px;
    height: auto;
  }

  li {
    margin-right: 30px;
    line-height: 40px;
  }

  .header {
    padding-top: 40px;
    font-size: 21px;
  }

  .header-list {
    list-style: none;
    display: block;
    font-size: 21px;
  }

  .text {
    margin-right: 200px;
    margin-left: 200px;
    font-size: 21px;
  }

/* Aurimas underline */
  .auri, .stan, .adam {
    cursor: pointer;
    padding: 10px;
    display: inline-block;
  }

  .auri:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .auri:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 170px;
    left: -5%;
  }

/* Stan underline */
  .stan {
    display: inline-block;
  }

  .stan:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .stan:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 160px;
    left: -5%;
  }

/* Adam underline */
  .adam {
    display: inline-block;
  }

  .adam:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .adam:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 160px;
    left: -5%;
  }


</style>
