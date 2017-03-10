import Vue from 'vue'
import Wrapper from './components/wrapper.vue'
import NavColor from './components/nav-color.vue'
import NavGround from './components/nav-ground.vue'

import colors from './colors/material.json'

Vue.component('nav-ground', NavGround, {
  props: ['color']
})
Vue.component('nav-color', NavColor)
Vue.component('wrapper', Wrapper)

new Vue({
  el: '#app'
})
