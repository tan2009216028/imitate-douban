/*
 * @file index.js
 * @author: Toshiba
 * @describe:状态管理
 * @date: 2017/8/3 22:42
 */
import Vue from 'vue'
import Vuex from 'vuex'

import activity from './module/activity'
import movie from './module/movie'
import movieSynopsis from './module/movieSynopsis'
import book from './module/book'
import bookSynopsis from './module/bookSynopsis'
import broadcast from './module/broadcast'
import group from './module/group'
import search from './module/search'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        activity,
        movie,
        movieSynopsis,
        book,
        bookSynopsis,
        broadcast,
        group,
        search
    }
})
