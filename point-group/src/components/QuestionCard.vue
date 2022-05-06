<template>
<div>
    <h4 v-show="annotation">* nが最大になるn回回転軸(Cn)を主軸とする。</h4>
    <p class="question">Q.{{ mainQuestion }}</p>
</div>
</template>

<script>
export default {
    props: [
        'mainQuestion',
        'annotation'
    ]
}
</script>

<style scoped>
.question {
    border: thick double #54BAB9;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 64px;
    margin-top: 0;
    font-weight: 600;
    font-size: 24px;
}
</style>