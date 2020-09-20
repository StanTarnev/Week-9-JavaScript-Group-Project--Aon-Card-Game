<template>
  <div id="app">
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
body {
  margin: 0;
}

@font-face {
  font-family: 'Roman Uncial Modern';
  src: local('Roman Uncial Modern'), url(./fonts/Romanuncialmodern-jra0.ttf) format('truetype');
}

#app {
  font-family: 'Roman Uncial Modern', serif;
  text-align: center;
  color: #2c3e50;
}
</style>
