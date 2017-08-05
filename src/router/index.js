import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import header from '@/components/header'
import pageView from '@/pages/pageView'
import homeView from '@/pages/homeView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                default: header,
                pageView: pageView
            },
            children: [
                {
                    path: '',
                    name: 'homeView',
                    component: homeView
                }
            ]
        }
    ]
})
