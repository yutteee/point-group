<template>
<div>
  <QuestionCard v-bind:mainQuestion="this.question"></QuestionCard>
</div>
</template>

<script>
import QuestionCard from "../components/QuestionCard.vue"

export default {
  components: {
    QuestionCard
  },
  data(){
    return{
      question: "分子は直線形ですか？"
    }
  }
}
</script>

<style scoped>

</style>