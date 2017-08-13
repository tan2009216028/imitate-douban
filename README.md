# imitate-douban

> * 这是一个基于vue2全家桶的豆瓣项目，主要数据接口来源于豆瓣api，感谢豆瓣提供
> * 本项目从零开始，目的是加深对vue2全家桶的认识和理解，提高应用水平，欢迎围观，大家一起共同进步
> * 本项目用到的插件和相关关键性的代码将会在日志记录中更新说明，方便查看

## 项目构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目运用的功能插件说明

> * superagent——superagent是nodejs里一个非常方便的客户端请求代理模块，当你想处理get,post,put,delete,head请求时,你就应该想起该用它了
> * vue-scroll-behavior——是一个定制导航路径上的滚动行为的插件，帮助你快速解决视图滚动位置的保存问题，尤其适用 hash 模式，同时以一种便捷的方式提供统一的滚动行为控制。

## 项目更新记录

> 1.  新增项目目录及基本配置                         2017-08-01
> 2.  完成项目首页数据获取，注释elint代码检查        2017-08-05
> 3.  完成活动详情页数据获取，正在解决活动详情content中用v-html导致无法加载图片的问题        2017-08-07
> 4.  完成电影部分数据获取及展示        2017-08-13
