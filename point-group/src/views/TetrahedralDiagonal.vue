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
            PhotoUrl: require('../assets/Td.png'),
            AnswerName: 'Td'
        }
    }
}
</script>