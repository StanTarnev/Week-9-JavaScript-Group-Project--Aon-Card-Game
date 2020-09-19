<template lang="html">
  <div class="cloud">
    <CloudNumber v-for="(number, index) in numbers" :item="number" :key="index"/>
  </div>
</template>

<script>
import CloudNumber from '@/components/quiz/CloudNumber.vue'
import QuizCloudService from '@/services/QuizCloudService.js'

export default {
  data() {
    return {
      numbers: []
    }
  },
  mounted() {
    QuizCloudService.get()
    .then ((json) => {
      this.numbers = json;
      this.doRandomisation(this.numbers);
    })
  },
  methods: {
    doRandomisation(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    }
  },
  components: {
    CloudNumber
  }
}
</script>

<style lang="css" scoped>
.cloud {
  border: 2px solid lightgrey;
  background-color: ghostwhite;
  border-radius: 40px;
  max-width: 400px;
  margin: 40px auto;
}

</style>
