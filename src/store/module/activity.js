/*
 * @file activityApi.js
 * @author: Toshiba
 * @describe: 获取活动数据接口
 * @date: 2017/8/3 22:54
 */
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'


//vuex应用层级状态
const state = {
    list: [], //更新活动数据
    temp: [],
    step: 0, //更新活动目前数据条数位置
    detailItem: {} //更新活动详情数据
}
//修改 Vuex 状态
const mutations = {
    getMoreData (state, payload) {
        state.step += 5;
        state.list = state.list.concat(payload.res);
    },
    getDetail (state, payload) {
        state.detailItem = payload.res
    }
}
//异步修改Vuex 状态
const actions = {
    /**
     * 获取成都市活动数据
     * step: 5
     * count: 5
     */
    getActivityList ({commit,state}) {//es6参数解耦，这里的对象其实是context，其包含commit和state
        request
            .get(myInterface.getActivityList+'?loc='+myInterface.cityId+'&start=' + state.step + '&count='+myInterface.count)
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getMoreData',
                        res: res.body.events
                    });
                }
            })
    },
    /**
     * 获取活动详情
     * id: event id
     */
    getActivityDetail ({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            request
                .get(myInterface.getActivityDetail + payload.activityId)//接收传递过来的活动id
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getDetail',
                            res: res.body
                        });
                        resolve(res.body);
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

