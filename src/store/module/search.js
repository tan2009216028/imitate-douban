/*
 * @file search.js
 * @author: Toshiba
 * @describe: 搜索页信息
 * @date: 2017/8/23 20:59
 */
'use strict';
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'

const state = {
    queryMovieData: {},
    queryBookData: {},
    queryMusicData:{}
}

const mutations = {
    query (state, payload) {
        debugger
        switch (payload.tag) {
            case 'movie':
                state.queryMovieData = {
                    pageType:'movieDescribe',
                    data:payload.res.subjects
                };
                break;
            case 'book':
                state.queryBookData = {
                    pageType:'bookDescribe',
                    data:payload.res.books
                };
                break;
            case 'music':
                state.queryMusicData = {
                    pageType:'movieDescribe',
                    data:payload.res.musics
                };
                break;
        }
    }
}

const actions = {
    /**
     * 查询电影,图书，音乐，默认返回3条数据
     */
    query ({ commit }, payload) {
        request
            .get(myInterface.getSearchMovieList + '?q=' + payload.queryStr + '&count=3')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'query',
                        tag: 'movie',
                        res: res.body
                    })
                }
            })
        request
          .get(myInterface.getSearchBookList + '?q=' + payload.queryStr + '&count=3')
          .use(jsonp)
          .end((err, res) => {
            if (!err) {
              commit({
                type: 'query',
                tag: 'book',
                res: res.body
              })
            }
          })
        request
          .get(myInterface.getSearchMusicList + '?q=' +  payload.queryStr + '&count=3')
          .use(jsonp)
          .end((err, res) => {
            if (!err) {
              commit({
                type: 'query',
                tag: 'music',
                res: res.body
              })
            }
          })
    }
}

export default {
    state,
    mutations,
    actions
}

