<template>
<div>
  <header>
    <a href="/" class="logo">
      <h1>point-group</h1>
    </a>
  </header>
  <div class="main">
    <router-view></router-view>
  </div>
  <footer>
    <div class="item">
      <p>参考：シュライバー・アトキンス無機化学(上)</p>
    </div>
    <div class="item">
      <p>about me</p>
        <a href="https://github.com/yutteee">
          <font-awesome-icon icon="fa-brands fa-github" class="icon" />
        </a>
        <a href="https://twitter.com/yutteeelog">
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon"/>
        </a>
        <a href="https://yutteee-portfolio.tk/">
          <font-awesome-icon icon="fa-solid fa-address-card" class="icon"/>
        </a>
      </div>
  </footer>
</div>
</template>

<style>
header {
  background-color: #54BAB9;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px 4% 8px;
}

.logo {
  color: #FBF8F1;
}

h1 {
  font-size: 16px;
}

a {
  text-decoration: none;
}

.icon {
  color: black;
}

.main {
  margin-top: 64px;
  background-color: #FBF8F1;
}

footer {
  background-color: #F7ECDE;
  display: flex;
  justify-content: space-between;
}

.item {
  width: 50%;
  text-align: center;
}

.icon {
  width: 15%;
  font-size: 1.5em;
}

@media screen and (max-width: 599px) {
  footer {
    flex-direction: column;
  }

  .item {
    width: 100%;
  }
}
</style>
