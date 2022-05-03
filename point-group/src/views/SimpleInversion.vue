<template>
<div>
    <AnswerPage :molecule="PhotoUrl" :pointGroup="AnswerName"></AnswerPage>
</div>
</template>

<script>
import AnswerPage from '../components/AnswerPage.vue'

export default {
    components:{
        AnswerPage
    },
    data() {
        return{
            PhotoUrl: require('../assets/Ci.png'),
            AnswerName: 'Ci'
        }
    }
}
</script>