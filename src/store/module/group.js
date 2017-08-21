/*
 * @file group.js
 * @author: Toshiba
 * @describe: 小组板块，本模块由于没有数据，就采用模拟数据
 * @date: 2017/8/20 15:35
 */
'use strict';

import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'


const state = {
    groupList: []//获取豆瓣小组列表
}

const mutations = {
    getGroupList (state, payload) {
        state.groupList = payload.res.result;
    }
}

const actions = {
    /**
     * 获取豆瓣小组列表
     */
    getGroupList ({ commit }) {
        return new Promise((resolve, reject) => {
            request
                .get(myInterface.getRapapiList)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getGroupList',
                            res: res.body
                        });
                        resolve(res);
                    }
                });
        })

    }
}

export default {
    state,
    mutations,
    actions
}
