<template>
<div>
  <div class="qanda">
    <QuestionCard v-bind:mainQuestion="this.question"></QuestionCard>
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
      question: "nが最大になるn回回転軸(Cn)を主軸とする。主軸に直交するn本のC2軸(nC2)がありますか？",
      yesLink: "/YesMirrorhQ",
      noLink: "/NoMirrorhQ"
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