<template>
<div class="answer">
    <div class="yesButton">
        <a :href="yes" class="yes">Yes</a>
    </div>
    <div class="noButton">
        <a :href="no" class="no">No</a>
    </div>
    <div class="return">
        <a href="/linerQ" class="restart">最初の質問に戻る</a>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'yes',
        'no'
    ]
}
</script>

<style scoped>
.answer {
  display: flex;
}

a {
  text-decoration: none;
}

.yes, .no {
    color: #fff;
    margin: 0 auto;
    display: block;
    height: 32px;
    line-height: 32px;
}

.restart {
    color: #fff;
    margin: 0 auto;
    display: block;
    height: 32px;
    line-height: 32px;

}

.yesButton, .noButton {
    text-align: center;
    justify-content: space-between;
    background-color: #E9DAC1;
    width: 32%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
}

.return {
    text-align: center;
    justify-content: space-between;
    background-color: #54BAB9;
    width: 32%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
}

@media screen and (max-width: 599px) {
    .yesButton, .noButton, .return {
        width: 100%;
    }

    .answer {
        flex-direction: column;
    }
}
</style>