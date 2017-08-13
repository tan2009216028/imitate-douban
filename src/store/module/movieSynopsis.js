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
    movieData: {},
    classify: '',
    adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
    questions: [
        {
            title: '大家为什么对国产片这么苛刻？',
            comments: '35回答'
        },
        {
            title: '有没有人喜欢凯凯王版的汤川学？',
            comments: '19回答'
        },
        {
            title: '真的有饭店的打包袋长的和优衣库一样吗？',
            comments: '11回答'
        },
        {
            title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
            comments: '7回答'
        }
    ]
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
    },
    // Filtering genres
    genres: state => {
        if (state.classify === 'book') {
            return state.subject.tags
        } else if (state.classify === 'movie') {
            return state.subject.genres
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
