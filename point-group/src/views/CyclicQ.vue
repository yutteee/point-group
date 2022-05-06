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
      question: "n回回転軸がありますか(Cnですか)？",
      boolean: false,
      yesLink: "/BiggestCnQ",
      noLink: "/MirrorQ"
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