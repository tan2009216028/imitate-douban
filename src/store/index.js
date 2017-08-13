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

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        activity,
        movie,
        movieSynopsis
    }
})
