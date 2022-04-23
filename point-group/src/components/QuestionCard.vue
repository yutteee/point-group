<template>
    <h1 class="question">{{ mainQuestion }}</h1>
</template>

<script>
export default {
    props: [
        'mainQuestion']
}
</script>

<style scoped>
.question {
    border: thick double #54BAB9;
}
</style>