<template>
<div class="answer">
    <h1>{{ pointGroup }}</h1>
    <img :src='molecule'/>
    <h6>例</h6>
    <div>
        <a href='/' class="home">home</a>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'pointGroup',
        'molecule'
    ]
}
</script>

<style scoped>
.answer {
    padding-top: 64px;
    padding-bottom: 64px;
    margin: 0 auto;
    text-align: center;
}


.home {
    height: 32px;
  line-height: 32px;
  display: block;
  background-color: #54BAB9;
  color: #fff;
  width: 20%;
  text-align: center;
  margin: 0 auto;
  border-radius: 6px;
  text-decoration: none;
}

@media screen and (max-width: 599px){
    img {
        width:80%;
        max-width: 80%;
        height: auto;
    }
}
</style>