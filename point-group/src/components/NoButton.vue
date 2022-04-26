<template>
<div class="left">
    <div class="child">
        <a :href="no" class="no">No</a>
    </div>
</div>
</template>

<script>
export default {
    props: ['no']
}
</script>

<style scoped>
.left {
    display: flex;
    justify-content: space-between;
    width: 50%;
    text-align: center;
}

.no {
    color: #fff;
    margin: 0 auto;
    display: block;
}

.child {
    background-color: #E9DAC1;
    width: 75%;
    margin: 0 auto;
    background-color: #E9DAC1;
}
</style>