<template>
<div>
  <header>
    <h1>
      <a href="/" class="title">point-group</a>
    </h1>
  </header>
  <div class="main">
    <router-view></router-view>

    <!-- 指標表一覧を作ったが、データを入れるのが流石に面倒なので後々追加することにする -->

    <!-- <h3>指標表一覧</h3>
    <h4>点群 C1, Cs, Ci</h4>
    <ul>
      <li v-for="OtherC in OtherCgroup" :key="OtherC.name" class="buttons">
        <a :href="OtherC.url" class="links">{{ OtherC.name }}</a>
      </li>
    </ul><br />
    <h4>点群 Cn</h4>
    <ul>
      <li v-for="Cn in Cngroup" :key="Cn.name" class="buttons">
        <a :href="Cn.url" class="links">{{ Cn.name }}</a>
      </li>
    </ul><br />
    <h4>点群 Cnv</h4>
    <ul>
      <li v-for="Cnv in Cnvgroup" :key="Cnv.group" class="buttons">
        <a :href="Cnv.url" class="links">{{ Cnv.name }}</a>
      </li>
    </ul><br />
    <h4>点群 Dn</h4>
    <ul>
      <li v-for="Dn in Dngroup" :key="Dn.name" class="buttons">
        <a :href="Dn.url" class="links">{{ Dn.name }}</a>
      </li>
    </ul><br />
    <h4>点群 Dnh</h4>
    <ul>
      <li v-for="Dh in Dhgroup" :key="Dh.name" class="buttons">
        <a :href="Dh.url" class="links">{{ Dh.name }}</a>
      </li>
    </ul><br />
    <h4>点群 Dnd</h4>
    <ul>
      <li v-for="Dd in Ddgroup" :key="Dd.name" class="buttons">
        <a :href="Dd.url" class="links">{{ Dd.name }}</a>
      </li>
    </ul><br />
    <h4>立方体群</h4>
    <ul>
      <li class="buttons">
        <a href="/TetrahedralDiagonal" class="links">Td</a>
      </li>
      <li class="buttons">
        <a href="/OperationHorizon" class="links">Oh</a>
      </li>
    </ul><br />
    <h4>二十面体</h4>
    <ul>
      <li class="buttons">
        <a href="/InversionHorizon" class="links">I</a>
      </li>
    </ul> -->
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

<script>
// export default {
//   data(){
//     return{
//       OtherCgroup: [
//         {
//           name: 'C1',
//           url: '/CyclicOne'
//         },
//         {
//           name: 'Cs',
//           url: '/CsSpiegel'
//         },
//         {
//           name: 'Ci',
//           url: '/SimpleInversion'
//         }
//       ],
//       Cngroup: [
//         {
//           name: 'C2',
//           url: '#'
//         },
//         {
//           name: 'C3',
//           url: '#'
//         },
//         {
//           name: 'C4',
//           url: '#'
//         },
//       ],
//       Cnvgroup: [
//         {
//           name: 'C2v',
//           url: '#'
//         },
//         {
//           name: 'C3v',
//           url: '#'
//         },
//         {
//           name: 'C4v',
//           url: '#'
//         },
//         {
//           name: 'C5v',
//           url: '#'
//         },
//         {
//           name: 'C6v',
//           url: '#'
//         },
//         {
//           name: 'C∞v',
//           url: '/CyclicLiner'
//         }
//       ],
//       Dngroup: [
//         {
//           name: 'D2',
//           url: '#'
//         },
//         {
//           name: 'D3',
//           url: '#'
//         },
//       ],
//       Dhgroup: [
//         {
//           name: 'D2h',
//           url: '#'
//         },
//         {
//           name: 'D3h',
//           url: '#'
//         },
//         {
//           name: 'D4h',
//           url: '#'
//         },
//         {
//           name: 'D5h',
//           url: '#'
//         },
//         {
//           name: 'D6h',
//           url: '#'
//         },
//         {
//           name: 'D∞h',
//           url: '/DihedralHorizontal'
//         },
//       ],
//       Ddgroup: [
//         {
//           name: 'D2d=Vd',
//           url: '#'
//         },
//         {
//           name: 'D3d',
//           url: '#'
//         },
//         {
//           name: 'D4d',
//           url: '#'
//         },
//       ]
//     }
//   }
// }
</script>

<style scoped>
header {
  background-color: #54BAB9;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px 4% 8px;
}

.title {
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

/* ul {
  margin: 0;
  padding: 0;
}

.buttons {
  list-style: none;
  width: 15%;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  background-color: #E9DAC1;
  transition: 0.3s ease-in-out;
  text-align: center;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}

.buttons :hover {
  background: #F7ECDE;
  color: #000;
}

.links {
  transition: 0.3s ease-in-out;
  display: block;
  color: #fff;
} */

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
