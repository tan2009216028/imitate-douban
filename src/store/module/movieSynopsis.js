/*
 * @file movieSynopsis.js
 * @author: Toshiba
 * @describe: 电影详情数据获取
 * @date: 2017/8/13 14:22
 */
'use strict';

import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'

const state = {
    movieData: {}
}
//派生新状态
const getters = {
    // 获取电影meta简介
    movieMeta(state){
        return state.movieData.year + ' / ' +
            state.movieData.genres.join(' / ') + ' / ' +
            state.movieData.casts.map(item => item.name).join(' / ') + ' / ' +
            state.movieData.directors.map(item => item.name).join(' / ') + ' / ' +
            state.movieData.countries.join(' / ')
    },
    // 过滤电影摘要，过多的文字通过点击扩展展开，限定120字符
    movieSummary: state => {
        if (state.movieData.summary) {
            return state.movieData.summary.slice(0, 120)
        }
    }
}

const mutations = {
    getMovieItem(state, payload) {
        state.movieData = payload.res
    }
}

const actions = {
    /**
     * 获取电影详情信息
     * 新增异步触发new Promise((resolve, reject) => {})
     * id: 电影类目id
     */
    getMovieItem({commit}, payload) {
        return new Promise((resolve, reject) => {
            request
                .get(myInterface.getMovieSynopsis + payload.id)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getMovieItem',
                            res: res.body
                        })
                        resolve(res);
                    }
                })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
