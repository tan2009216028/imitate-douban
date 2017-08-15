/*
 * @file book.js
 * @author: Toshiba
 * @describe: 获取图书类信息
 * @date: 2017/8/14 20:46
 */
'use strict';
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import myInterface from '@/interface'


const state = {
    novel: [],//小说
    reality: [],//现实
    travel: [],//旅行
    bookTags: [
        {
            title: '小波看书',
            href: 'https://m.douban.com/doulist/10372/',
            color: '#42BD56'
        },
        {
            title: '村上春树周边',
            href: 'https://m.douban.com/doulist/105583/',
            color: '#FF4055'
        },
        {
            title: '我凭名字认定了你',
            href: 'https://m.douban.com/doulist/99294/',
            color: '#4F9DED'
        },
        {
            title: '不可饶恕的女人们',
            href: 'https://m.douban.com/doulist/35573/',
            color: '#CC3344'
        },
        {
            line: true
        },
        {
            title: '爱欲书',
            href: 'https://m.douban.com/doulist/38088147/',
            color: '#FFAC2D'
        },
        {
            title: '他们还写侦探小说',
            href: 'https://m.douban.com/doulist/645579/',
            color: '#3BA94D'
        },
        {
            title: '人生识字始忧患',
            href: 'https://m.douban.com/doulist/192653/',
            color: '#CC3344'
        },
        {
            title: '詩歌書店',
            href: 'https://m.douban.com/doulist/89925/',
            color: '#FF4055'
        }
    ]
}

const mutations = {
    getBookInfo (state, payload) {
        switch (payload.tag) {
            case 'novel':
                state.novel = payload.res;
                break;
            case 'reality':
                state.reality = payload.res;
                break;
            case 'travel':
                state.travel = payload.res;
                break;
            default:
        }
    }
}

const actions = {
    /**
     * 获取指定分类的图书——虚构类、非虚构类、旅行
     * count: 10
     */
    getBookList ({ commit }) {
        request
            .get(myInterface.getBookList+'?count=10&q=虚构类')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getBookInfo',
                        tag: 'novel',
                        res: res.body.books
                    })
                }
            });
        request
            .get(myInterface.getBookList+'?count=10&q=非虚构类')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getBookInfo',
                        tag: 'reality',
                        res: res.body.books
                    })
                }
            });
        request
            .get(myInterface.getBookList+'?count=10&q=旅行')
            .use(jsonp)
            .end((err, res) => {
                if (!err) {
                    commit({
                        type: 'getBookInfo',
                        tag: 'travel',
                        res: res.body.books
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


