import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import centerPage from '@/pages/centerPage'
import homePage from '@/pages/homePage'
import detailPage from '@/pages/detailPage'
import moviePage from '@/pages/moviePage'
import filmPage from '@/pages/filmPage'
import bookPage from '@/pages/bookPage'
import bookDetailPage from '@/pages/bookDetailPage'
import broadcastPage from '@/pages/broadcastPage'
import groupPage from '@/pages/groupPage'
import searchPage from '@/pages/searchPage'
import loginPage from '@/pages/loginPage'
import registerPage from '@/pages/registerPage'

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
                {
                    path: 'login',
                    name: 'loginPage',
                    component: loginPage
                },
                {
                    path: 'register',
                    name: 'registerPage',
                    component: registerPage
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
                {
                    path: 'status',//广播板块
                    name: 'broadcastPage',
                    component: broadcastPage
                },
                {
                    path: 'group',//小组板块
                    name: 'groupPage',
                    component: groupPage
                },
                {
                    path: 'search',//小组板块
                    name: 'searchPage',
                    component: searchPage
                },
            ]
        }
    ]
})
