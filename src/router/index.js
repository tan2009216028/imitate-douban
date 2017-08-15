import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import header from '@/components/header'
import centerPage from '@/pages/centerPage'
import homePage from '@/pages/homePage'
import detailPage from '@/pages/detailPage'
import moviePage from '@/pages/moviePage'
import filmPage from '@/pages/filmPage'
import bookPage from '@/pages/bookPage'
import bookDetailPage from '@/pages/bookDetailPage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                default: header,
                centerPage: centerPage
            },
            children: [
                {
                    path: '',
                    name: 'homePage',
                    component: homePage
                },
                // {
                //     path: 'detail/:id', //通过params参数传递方式传递活动id
                //     name: 'detailPage',
                //     component: detailPage
                // },
                {
                    path: 'detail/chengdu',//通过query查询参数传递方式传递活动id
                    name: 'detailPage',
                    component: detailPage
                },
                {
                    path: 'movie',//电影板块
                    name: 'moviePage',
                    component: moviePage
                },
                {
                    path: 'movie/detail',//电影详情
                    name: 'movieDescribe',
                    component: filmPage
                },
                {
                    path: 'book',//图书板块
                    name: 'bookPage',
                    component: bookPage
                },
                {
                    path: 'book/detail',//图书详情
                    name: 'bookDescribe',
                    component: bookDetailPage
                },
            ]
        }
    ]
})
