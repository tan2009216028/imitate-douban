/*
 * @file broadcast.js
 * @author: Toshiba
 * @describe: 获取用户未登录广播
 * @date: 2017/8/16 22:26
 */
'use strict';
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'
const state = {
    status :null
};
const mutations = {
    getBroadcastList (state, payload) {
        state.status = payload.res.items;
        console.log(state.status)
    }
};

const actions = {
    /**
     * 获取非登录用户广播20条
     * 新增异步触发new Promise((resolve, reject) => {})
     */
    getBroadcastList({commit}, payload) {
        return new Promise((resolve, reject) => {
            request
                .get(myInterface.getBroadcastList)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getBroadcastList',
                            res: res.body
                        });
                        resolve(res);
                    }
                })
        })
    }
}
export default {
    state,
    mutations,
    actions
}
