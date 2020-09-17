<template lang="html">
  <div>
    <div class="quiz-header">
      <h2>Click and hover over words to hear them</h2>
      <numbers-cloud/>
    </div>
    <div class="test">
      <h2>Test Your Gaelic numbers!</h2>
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
  left: 20%;
}

.test {
  position: absolute;
  bottom: 20%;
  left: 63%;
  width: 200px;
}
</style>
