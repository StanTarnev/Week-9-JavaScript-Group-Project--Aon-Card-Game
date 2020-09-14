<template lang="html">
  <div class="number-test">
    <individual-number v-for="question in questions" :questionsData="question"/>
  </div>
</template>

<script>
import IndividualNumber from '@/components/quiz/IndividualNumber.vue'
import QuizQuestionsService from '@/services/QuizQuestionsService.js'

export default {
  data(){
    return {
      questions: []
    }
  },
  components: {
    'individual-number': IndividualNumber
  },
  mounted() {
    QuizQuestionsService.get()
      .then((json) => {
        this.questions = json
    })

  }
}
</script>

<style lang="css" scoped>
.number-test {
  width: max-content;
}
</style>
