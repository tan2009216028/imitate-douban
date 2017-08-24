import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import message from './components/message/message'
// import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

Vue.config.productionTip = false;
Vue.prototype.$userInfo = {};
Vue.use(message)
// Vue.prototype.$userInfo = {
//     userAccount:'',
//     userPassword:''
// };

/* eslint-disable no-new */
window['douban'] = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
