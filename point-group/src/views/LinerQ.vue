<template>
<div>
  <div class="qanda">
    <QuestionCard
      v-bind:mainQuestion="this.question"
      v-bind:annotation="this.boolean"
    />
    <AnswerButton
      v-bind:yes="this.yesLink"
      v-bind:no="this.noLink"
    />
  </div>
</div>
</template>

<script>
import QuestionCard from "../components/QuestionCard.vue"
import AnswerButton from "../components/AnswerButton.vue"

export default {
  components: {
    QuestionCard,
    AnswerButton
  },
  data(){
    return{
      question: "分子は直線形ですか？",
      boolean: false,
      yesLink: "/LineriQ",
      noLink: "/NumberQ"
    }
  }
}
</script>

<style scoped>
.qanda {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
  padding-bottom: 64px;
}
</style>