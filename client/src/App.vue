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

#app {
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
  color: #2c3e50;
}
</style>
