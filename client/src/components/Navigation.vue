<template lang="html">
  <div>
    <ul class="nav-bar">
      <li>
        <router-link to="/"><img title="Home page" id="logo" src="../assets/aon.png" alt="logo"></router-link>
      </li>
      <li class="nav-item red">
        <router-link to="/info">About</router-link>
      </li>
      <li class="nav-item yellow">
        <router-link to="/quiz">Quiz</router-link>
      </li>
      <li class="nav-item blue">
        <router-link to="/learn">Rules</router-link>
      </li>
      <li class="nav-item green">
        <router-link to="/play">Game</router-link>
      </li>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="css" scoped>

.nav-item {
  overflow: hidden;
  display: inline-block;
  transition: all .5s ease-in-out;
  color: #264726;
  font-size: 35px;
  font-weight: bolder;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 2px;
  padding-bottom: 2px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.nav-item:hover {
  -webkit-font-smoothing: antialiased;
  transition: all .4s;
  backface-visibility: hidden;
  transform:  scale(1.6);
  letter-spacing: 9px;
}

.nav-bar {
  list-style: none;
  display: inline-block;
  width: 1200px;
  padding-left: 0px;
  margin: 10px 0px;
}

li {
  display: inline-block;
}

.nav-item > a:active {
  color: #264726;
  text-decoration: none;
}

.nav-item > a:link {
  color: #264726;
  text-decoration: none;
}

.nav-item > a:visited {
  color: #264726;
  text-decoration: none;
}


#logo {
  position: relative;
  width: 40px;
  height: auto;
  transition: transform 1.5s ease-in-out;
}

#logo:hover {
  transform: rotateZ(360deg);
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.test-enter {
  opacity: 0;
}

.test-leave-active {
  opacity: 0;
}
</style>
