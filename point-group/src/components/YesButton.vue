<template>
<div class="right">
    <div class="child">
        <a :href="yes" class="yes">Yes</a>
    </div>
</div>
</template>

<script>
export default {
    props: ['yes']
}
</script>

<style scoped>
.yes {
    color: #fff;
    margin: 0 auto;
    display: block;
}

.right {
    justify-content: space-between;
    width: 50%;
    text-align: center;
}

.child {
    background-color: #E9DAC1;
    width: 75%;
    margin: 0 auto;
}
</style>