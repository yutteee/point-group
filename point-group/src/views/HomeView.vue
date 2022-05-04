<template>
<div class='main'>
  <div class="right">
    <div class="center">
      <p class="description">分子の点群の帰属を決定します。</p>
      <img class="mini" src="../assets/flowchart.png">
      <a href="/linerQ" class="start">start</a>
    </div>
  </div>
  <div class="left">
    <img class="big" src="../assets/flowchart.png">
  </div>
</div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  margin: 0 auto;
  text-align: center;
}

.right {
  width: 35%;
  display: flex;
  align-items: center;
}

.description {
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 32px;
}

.center {
  width: 100%;
}

.mini {
  display: none;
}

.start {
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
  margin-top: 32px;
}

.left {
  width: 65%;
}

.big {
  width: 90%;
  max-width: 90%;
  height: auto;
}

@media screen and (max-width: 900px) {
  .main {
    flex-direction: column;
  }

  .right {
    width: 100%;
  }

  .left {
    width: 100%;
  }

  .description {
    font-size: 18px;
  }

  .mini {
    display: block;
    width: 80%;
    max-width: 80%;
    height: auto;
    margin: 0 auto;
  }

  .big {
    display: none;
  }
}
</style>