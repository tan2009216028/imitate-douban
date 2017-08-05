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
    list: [], //定义数据
    temp: [],
    step: 0, //定义目前数据条数位置
    eventItem: {}
}
//修改 Vuex 状态
const mutations = {
    getMoreData (state, payload) {
        state.step += 5;
        state.list = state.list.concat(payload.res);
    },
    getSingleEvent (state, payload) {
        state.eventItem = payload.res
    }
}
//异步修改Vuex 状态
const actions = {
    /**
     * 获取成都市活动数据
     * step: 5
     * count: 5
     */
    getMoreData ({commit,state}) {//es6参数解耦，这里的大对象其实是context，其包含commit和state
        request
            // .get(myInterface.getActivityList+'?loc='+myInterface.cityId+'&start=' + state.step + '&count='+myInterface.count)
            .get(myInterface.getActivityList2+'?loc_id='+myInterface.cityId+'&next_date=')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getMoreData',
                        res: res.body.events
                    })
                }
            })
    },
    /**
     * Getting single event
     * id: event id
     */
    getSingleEvent ({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            request
                .get('https://api.douban.com/v2/event/' + payload.id)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getSingleEvent',
                            res: res.body
                        })
                        resolve(res)
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

