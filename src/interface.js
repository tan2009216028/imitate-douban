/*
 * @file interface.js
 * @author: Toshiba
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
const domain2 = 'https://m.douban.com';
// https://m.douban.com/rexxar/api/v2/recommend_feed?loc_id=118318
const INTERFACE = {
    cityId:'118318',
    count:5,
    getActivityList: domain + '/v2/event/list', //获取活动列表
    getActivityList2: domain2 + '/rexxar/api/v2/recommend_feed' //获取活动列表
}
export default INTERFACE;
