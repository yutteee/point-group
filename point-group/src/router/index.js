import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LinerQ from "../views/LinerQ.vue"
import LineriQ from "../views/LineriQ.vue"
import DihedralHorizontal from "../views/DihedralHorizontal.vue"
import CyclicLiner from "../views/CyclicLiner.vue"
import NumberQ from "../views/NumberQ.vue"
import NumberiQ from "../views/NumberiQ.vue"
import CircleFiveQ from "../views/CircleFiveQ.vue"
import InversionHorizon from "../views/InversionHorizon.vue"
import OperationHorizon from "../views/OperationHorizon.vue"
import TetrahedralDiagonal from "../views/TetrahedralDiagonal.vue"
import CyclicQ from "../views/CyclicQ.vue"
import BiggestCnQ from "../views/BiggestCnQ.vue"
import DihedralDiagonal from "../views/DihedralDiagonal.vue"
import SimpleDihedral from "../views/SimpleDihedral.vue"
import NoMirrorhQ from "../views/NoMirrorhQ.vue"
import CyclicHorizontal from "../views/CyclicHorizontal.vue"
import NMirrorvQ from "../views/NMirrorvQ.vue"
import CyclicVertical from "../views/CyclicVertical.vue"
import SpiegelQuestion from "../views/SpiegelQuestion.vue"
import SimpleSpiegel from "../views/SimpleSpiegel.vue"
import SimpleCyclic from "../views/SimpleCyclic.vue"
import MirrorQ from "../views/MirrorQ.vue"
import CsSpiegel from "../views/CsSpiegel.vue"
import InversionQ from "../views/InversionQ.vue"
import SimpleInversion from "../views/SimpleInversion.vue"
import CyclicOne from "../views/CyclicOne.vue"
import YesMirrorhQ from "../views/YesMirrorhQ.vue"
import DihedralN from "../views/DihedralN.vue"
import NMirrordQ from "../views/NMirrordQ.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/linerQ',
    name: 'linerQ',
    component: LinerQ
  },
  {
    path: '/LineriQ',
    name: 'lineriQ',
    component: LineriQ
  },
  {
    path: '/DihedralHorizontal',
    name: 'DihedralHorizontal',
    component: DihedralHorizontal
  },
  {
    path: '/CyclicLiner',
    name: 'CyclicLiner',
    component: CyclicLiner
  },
  {
    path: '/NumberQ',
    name: 'NumberQ',
    component: NumberQ
  },
  {
    path: '/NumberiQ',
    name: 'NumberiQ',
    component: NumberiQ
  },
  {
    path: '/CircleFiveQ',
    name: 'CircleFiveQ',
    component: CircleFiveQ
  },
  {
    path: '/InversionHorizon',
    name: 'InversionHorizon',
    component: InversionHorizon
  },
  {
    path: '/OperationHorizon',
    name: 'OperationHorizon',
    component: OperationHorizon
  },
  {
    path: '/TetrahedralDiagonal',
    name: 'TetrahedralDiagonal',
    component: TetrahedralDiagonal
  },
  {
    path: '/CyclicQ',
    name: 'CyclicQ',
    component: CyclicQ
  },
  {
    path: '/BiggestCnQ',
    name: 'BiggestCnQ',
    component: BiggestCnQ
  },
  {
    path: '/YesMirrorhQ',
    name: 'YesMirrorhQ',
    component: YesMirrorhQ
  },
  {
    path: '/DihedralN',
    name: 'DihedralN',
    component: DihedralN
  },
  {
    path: '/DihedralDiagonal',
    name: 'DihedralDiagonal',
    component: DihedralDiagonal
  },
  {
    path: '/SimpleDihedral',
    name: 'SimpleDihedral',
    component: SimpleDihedral
  },
  {
    path: '/NoMirrorhQ',
    name: 'NoMirrorhQ',
    component: NoMirrorhQ
  },
  {
    path: '/CyclicHorizontal',
    name: 'CyclicHorizontal',
    component: CyclicHorizontal
  },
  {
    path: '/NMirrorvQ',
    name: 'NMirrorvQ',
    component: NMirrorvQ
  },
  {
    path: '/CyclicVertical',
    name: 'CyclicVertical',
    component: CyclicVertical
  },
  {
    path: '/SpiegelQuestion',
    name: 'SpiegelQuestion',
    component: SpiegelQuestion
  },
  {
    path: '/SimpleSpiegel',
    name: 'SimpleSpiegel',
    component: SimpleSpiegel
  },
  {
    path: '/SimpleCyclic',
    name: 'SimpleCyclic',
    component: SimpleCyclic
  },
  {
    path: '/MirrorQ',
    name: 'MirrorQ',
    component: MirrorQ
  },
  {
    path: '/CsSpiegel',
    name: 'CsSpiegel',
    component: CsSpiegel
  },
  {
    path: '/InversionQ',
    name: 'InversionQ',
    component: InversionQ
  },
  {
    path: '/SimpleInversion',
    name: 'SimpleInversion',
    component: SimpleInversion
  },
  {
    path: '/CyclicOne',
    name: 'CyclicOne',
    component: CyclicOne
  },
  {
    path: '/NMirrordQ',
    name: 'NMirrordQ',
    component: NMirrordQ
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
