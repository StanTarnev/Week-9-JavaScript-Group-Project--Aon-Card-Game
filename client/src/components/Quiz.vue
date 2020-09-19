<template lang="html">
  <div>
    <div class="quiz-header">
      <h3>Click and hover over words to hear them</h3>
      <numbers-cloud/>
    </div>
    <div class="test">
      <h3>Test Your Gaelic numbers</h3>
      <numbers-test/>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

import NumbersCloud from '@/components/quiz/NumbersCloud.vue'
import NumbersTest from '@/components/quiz/NumbersTest.vue'

export default {
  name: 'quiz',
  components: {
    'numbers-cloud': NumbersCloud,
    'numbers-test': NumbersTest,
  }
}
</script>

<style lang="css" scoped>
.quiz-header {
  position: absolute;
  top: 25%;
  left: 22%;
}

.test {
  position: absolute;
  bottom: 25%;
  left: 62%;
  width: 250px;
}

h3 {
  text-transform: uppercase;
  max-width: 360px;
  margin-left: 22px;
}
</style>
