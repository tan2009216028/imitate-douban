/*
 * @file interface.js
 * @author:
 * @describe: 定义各种接口，接口来源豆瓣开源api https://developers.douban.com/wiki/?title=api_v2
 *            默认定义城市为成都，根据https://api.douban.com/v2/loc/list得到成都的id为118318
 * 返回结果参数说明
 * @start	起始元素
 * @count	返回结果的数量
 *
 * @date: 2017/8/4 22:55
 */
'use strict';
const domain = 'https://api.douban.com';
const INTERFACE = {
    cityId:'118318',
    count:5,
    getActivityList: domain + '/v2/event/list', //获取活动列表
    getActivityDetail: domain + '/v2/event/', //获取活动详情
    getShowMovieList:domain + '/v2/movie/in_theaters', //获取正在上映的电影
    getWillShowMovieList:domain + '/v2/movie/coming_soon', //获取即将上映的电影
    getTop250MovieList:domain + '/v2/movie/top250' //获取top250排行榜
}
export default INTERFACE;
