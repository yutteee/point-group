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
      question: "nが最大になるn回回転軸(Cn)を主軸とする。主軸を含んでおり、主軸に直交する軸2つがなす角を2等分する鏡映面が存在しますか?",
      yesLink: "/DihedralDiagonal",
      noLink: "/SimpleDihedral"
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