/*
 * @file bookSynopsis.js
 * @author: Toshiba
 * @describe: 图书详情获取信息
 * @date: 2017/8/15 22:04
 */
'use strict';
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'

const state = {
    bookData: {},
    bookTags: [
        {
            title: '一日一书',
            href: 'https://m.douban.com/doulist/36861254/',
            color: '#42BD56'
        },
        {
            title: '你银幕上的奇迹    我笔尖下的叹息',
            href: 'https://m.douban.com/doulist/218398/',
            color: '#42BD56'
        },
        {
            title: '我的身体里有一个游荡的未来',
            href: 'https://m.douban.com/doulist/27039041/',
            color: '#42BD56'
        },
        {
            title: '读书即生活GREAT BOOK TEAM',
            href: 'https://m.douban.com/doulist/43680804/',
            color: '#42BD56'
        },
        {
            line: true
        },
        {
            title: '生活中永远保持期待：好书追寻中',
            href: 'https://m.douban.com/doulist/38991156/',
            color: '#42BD56'
        },
        {
            title: '電影研究',
            href: 'https://m.douban.com/doulist/38999138/',
            color: '#42BD56'
        },
        {
            title: '那些不可说的结局',
            href: 'https://m.douban.com/doulist/39524068/',
            color: '#42BD56'
        },
        {
            title: '影事杂陈',
            href: 'https://m.douban.com/doulist/937625/',
            color: '#42BD56'
        }
    ]
}
//派生新状态
const getters = {
    // 获取图书meta简介
    bookMeta(state){
        return state.bookData.author.join(' / ') +
            state.bookData.translator.join(' / ') + ' / ' +
            state.bookData.publisher + ' / ' +
            state.bookData.binding + ' / ' + state.bookData.pages + ' / ' +
            state.bookData.price + '/ ' + state.bookData.pubdate
    },
    // 过滤图书摘要，过多的文字通过点击扩展展开，限定120字符
    bookSummary: state => {
        if (state.bookData.summary) {
            return state.bookData.summary.slice(0, 120)
        }
    }
}

const mutations = {
    getBookItem(state, payload) {
        state.bookData = payload.res;
    }
}

const actions = {
    /**
     * 获取图书详情信息
     * 新增异步触发new Promise((resolve, reject) => {})
     * id: 图书id
     */
    getBookItem({commit}, payload) {
        return new Promise((resolve, reject) => {
            request
                .get(myInterface.getBookSynopsis + payload.id)
                .use(jsonp)
                .end((err, res) => {
                debugger
                    if (!err) {
                        commit({
                            type: 'getBookItem',
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
