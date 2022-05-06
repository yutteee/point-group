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
      question: "鏡映面が主軸に対して垂直にありますか(σhですか)?",
      boolean: true,
      yesLink: "/CyclicHorizontal",
      noLink: "/NMirrorvQ"
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