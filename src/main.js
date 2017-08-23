import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
window['douban'] = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
