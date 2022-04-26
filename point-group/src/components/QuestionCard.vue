<template>
    <h1 class="question">Q.{{ mainQuestion }}</h1>
</template>

<script>
export default {
    props: ['mainQuestion']
}
</script>

<style scoped>
.question {
    border: thick double #54BAB9;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 64px;
}
</style>